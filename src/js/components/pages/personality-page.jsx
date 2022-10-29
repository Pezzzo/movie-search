import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPersonality } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { Error } from '../blocks/error';
import { Main } from '../layout/main';

const PersonalityPage = () => {

  const dispatch = useDispatch();
  const { loading, error, personalityInfo, personalityInfoFacts, personalityInfoFilms } = useSelectors();
  const params = useParams();

  useEffect(() => {
    dispatch(getPersonality(`${URLS.personality}${params.id}`));
  }, [params.id]);

  return error ? <Error error={error} /> : (
    <Main loading={loading}>
      <div className="inner-wrapper personality">
        <div className="personality__wrapper">
          <div className="personality__img-wrapper">
            <img
              className="personality__img"
              src={personalityInfo.posterUrl}
              width="240"
              height="380"
              alt="фото" />
          </div>
          <div className="personality__info-wrapper">
            <h2 className="personality__subtitle personality__subtitle--nameru">{personalityInfo.nameRu}</h2>
            <h2 className="personality__subtitle personality__subtitle--nameen">{personalityInfo.nameEn}</h2>
            <p className="personality__subtitle">Возраст: <span  className="personality__description">{personalityInfo.age}</span></p>
            <p className="personality__subtitle">Карьера: <span  className="personality__description">{personalityInfo.profession}</span></p>
            <p className="personality__subtitle">День рождения: <span  className="personality__description">{personalityInfo.birthday}</span></p>
            <p className="personality__subtitle">Место рождения: <span  className="personality__description">{personalityInfo.birthplace}</span></p>
            <p className="personality__subtitle">Награды: <span  className="personality__description">{personalityInfo.hasAwards}</span></p>
            <p className="personality__subtitle">Фильмы: <span  className="personality__description">{personalityInfoFilms.length}</span></p>
            {personalityInfo.death !== null ? <p  className="personality__subtitle">Дата смерти: <span  className="personality__description">{personalityInfo.death}</span></p> : ''}
            {personalityInfo.death !== null ? <p  className="personality__subtitle">Место смерти: <span  className="personality__description">{personalityInfo.deathplace}</span></p> : ''}
            <a className="kinopoisk-link" href={personalityInfo.webUrl} target="_blank" rel="noopener noreferrer"><span>подробнее на </span>Кинопоиск</a>
            <ul className="personality__list">
              {personalityInfoFacts.map((fact, index) => (
                <li className="personality__item" key={index}><p>{fact}</p></li>
              ))}

            </ul>
          </div>

        </div>
      </div>
    </Main>
  );
}

export { PersonalityPage };


// "personId": 66539,
//   "webUrl": "https://www.kinopoisk.ru/name/66539/",
//   "nameRu": "Винс Гиллиган",
//   "nameEn": "Vince Gilligan",
//   "sex": "MALE",
//   "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/66539.jpg",
//   "growth": 183,
//   "birthday": "1967-02-10",
//   "death": null,
//   "age": 55,
//   "birthplace": "Ричмонд, Вирджиния, США",
//   "deathplace": null,
//   "spouses": [],
//   "hasAwards": 1,
//   "profession": "Сценарист, Продюсер, Актер",
//   "facts": [],
