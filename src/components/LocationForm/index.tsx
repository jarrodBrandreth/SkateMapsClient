import React, { useState } from 'react';
import { useLocationForm } from '../../hooks/useLocationForm';
import { MdAddCircleOutline, MdArrowForward, MdPushPin } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { LocationPinPosition, LocationType } from '../../types/types';
import { Rating } from '../Rating';
import { ChooseCoordsMap } from '../ChooseCoordsMap';
import { useOnOff } from '../../hooks/useOnOff';
import { Button } from '../Button';
import { latitudeMin, latitudeMax, longitudeMin, longitudeMax } from '../../globals';
import { validateCoords } from '../../helperFunctions/validateCoords';
import { ErrorDisplay } from '../ErrorDisplay';
import styles from './LocationForm.module.css';

interface LocationFormProps {
  location: LocationType | null;
  updateLocation: (newLocation: LocationType) => void;
}

export function LocationForm({ location, updateLocation }: LocationFormProps) {
  const { formState, formDispatch } = useLocationForm(location);
  const { isOn: showCoordsMap, turnOn: toCoordsMap, turnOff: backToForm } = useOnOff(false);
  const [error, setError] = useState<false | string>(false);

  const updateWithCoords = (coords: LocationPinPosition) => {
    const payload = {
      lat: coords.lat.toString(),
      lng: coords.lng.toString(),
    };
    formDispatch({ type: 'update coordinates', payload: payload });
    backToForm();
  };

  const preview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const latitude = parseFloat(formState.coordinates.lat);
    const longitude = parseFloat(formState.coordinates.lng);
    const validate = validateCoords(latitude, longitude);

    if (validate.error) {
      setError(validate.error);
      return;
    }
    const newLocation: LocationType = {
      _id: formState._id,
      title: formState.title,
      borough: formState.borough,
      neighborhood: formState.neighborhood,
      category: formState.category,
      coordinates: {
        lat: latitude,
        lng: longitude,
      },
      rating: formState.rating,
      description: formState.description,
      images: formState.images,
    };
    updateLocation(newLocation);
  };

  return (
    <section>
      {showCoordsMap ? (
        <ChooseCoordsMap
          previousLocation={formState.coordinates}
          updateWithCoords={updateWithCoords}
          cancel={backToForm}
        />
      ) : (
        <form className={styles.container} onSubmit={preview}>
          <h2 className={styles.heading}>Location Form</h2>
          <fieldset className={styles.form_style}>
            <div className={`${styles.field} ${styles.title}`}>
              <label htmlFor="title">Title</label>
              <input
                onChange={(e) => formDispatch({ type: 'title', payload: e.target.value })}
                value={formState.title}
                id="title"
                name="title"
                type="text"
                required
              />
            </div>

            <div className={`${styles.field} ${styles.borough}`}>
              <label htmlFor="borough">Borough</label>
              <select
                onChange={(e) => formDispatch({ type: 'borough', payload: e.target.value })}
                value={formState.borough}
                id="borough"
                name="borough"
              >
                <option value="manhattan">Manhattan</option>
                <option value="brooklyn">Brooklyn</option>
                <option value="queens">Queens</option>
                <option value="bronx">Bronx</option>
                <option value="staten island">Staten Island</option>
              </select>
            </div>

            <div className={`${styles.field} ${styles.neighborhood}`}>
              <label htmlFor="neighborhood">Neighborhood</label>
              <input
                onChange={(e) => formDispatch({ type: 'neighborhood', payload: e.target.value })}
                value={formState.neighborhood}
                id="neighborhood"
                name="neighborhood"
                type="text"
                placeholder="eg. East Village"
                required
              />
            </div>

            <div className={`${styles.field} ${styles.category}`}>
              <label htmlFor="category">Category</label>
              <select
                onChange={(e) => formDispatch({ type: 'category', payload: e.target.value })}
                value={formState.category}
                id="category"
                name="category"
              >
                <option value="spot">Spot</option>
                <option value="shop">Shop</option>
                <option value="skatepark">Skatepark</option>
              </select>
            </div>

            <Button className={styles.use_map} onClick={() => toCoordsMap()}>
              <MdPushPin size="22px" /> use map pin
            </Button>

            <div className={`${styles.field} ${styles.latitude}`}>
              <label htmlFor="latitude">Latitude</label>
              <input
                onChange={(e) => formDispatch({ type: 'latitude', payload: e.target.value })}
                value={formState.coordinates.lat}
                id="latitude"
                name="latitude"
                type="text"
                pattern="^[0-9]{2}[.][0-9]+"
                title={'floating point and in range'}
                placeholder="eg. 40.7350"
                required
              />
              <div className={styles.coords_range}>{`*min ${latitudeMin.toFixed(
                2,
              )}, max ${latitudeMax.toFixed(2)}`}</div>
            </div>

            <div className={`${styles.field} ${styles.longitude}`}>
              <label htmlFor="longitude">Longitude</label>
              <input
                onChange={(e) => formDispatch({ type: 'longitude', payload: e.target.value })}
                value={formState.coordinates.lng}
                id="longitude"
                name="longitude"
                type="text"
                pattern="^[-][0-9]{2}[.][0-9]+"
                title={'floating point starting with - and in range'}
                placeholder="eg. -73.9915"
                required
              />
              <div className={styles.coords_range}>{`*max ${longitudeMax.toFixed(
                2,
              )}, min ${longitudeMin.toFixed(2)}`}</div>
            </div>

            <div className={styles.image_section}>
              <div className={`${styles.field} ${styles.add_image}`}>
                <label htmlFor="add_image_url">Add Image (url)</label>
                <div className={styles.add_image_url}>
                  <input
                    onChange={(e) =>
                      formDispatch({ type: 'add image url', payload: e.target.value })
                    }
                    value={formState.add_image_url}
                    id="add_image_url"
                    name="add_image_url"
                    type="text"
                  />

                  <Button
                    disabled={formState.add_image_url === ''}
                    onClick={() =>
                      formDispatch({
                        type: 'add image',
                        payload: formState.add_image_url,
                      })
                    }
                  >
                    <MdAddCircleOutline size="22px" />
                  </Button>
                </div>
              </div>
              <div className={styles.images}>
                {formState.images.map((url) => {
                  return (
                    <div key={url} className={styles.image_container}>
                      <span className={styles.url}>{url}</span>
                      <Button
                        onClick={() =>
                          formDispatch({
                            type: 'remove image',
                            payload: url,
                          })
                        }
                      >
                        <FaRegTrashAlt size="18px" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`${styles.field} ${styles.rating_container}`}>
              <p>Rating</p>
              <Rating
                className={styles.rating}
                number={formState.rating}
                setNumber={(rating) => formDispatch({ type: 'rating', payload: rating })}
              />
            </div>

            <div className={`${styles.field} ${styles.description}`}>
              <label htmlFor="description">Description</label>
              <textarea
                onChange={(e) => formDispatch({ type: 'description', payload: e.target.value })}
                value={formState.description}
                id="description"
                name="description"
                rows={6}
                maxLength={300}
                placeholder="maximum 300 characters"
                required
              />
            </div>

            <button className={styles.preview} type="submit">
              Preview
              <MdArrowForward size="22px" />
            </button>
          </fieldset>
          {error && <ErrorDisplay errorMessage={error} closeErrorDisplay={() => setError(false)} />}
        </form>
      )}
    </section>
  );
}
