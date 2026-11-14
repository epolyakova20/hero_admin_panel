const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all'
};

// Получаем уникальные элементы из списка героев
const getFilters = (heroes) => {
    return [...new Set(heroes.map(hero => hero.element).filter(Boolean))];
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            };

        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                filters: getFilters(action.payload),
                heroesLoadingStatus: 'idle'
            };

        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            };

        // Добавление героя
        case 'HERO_CREATED': {
            const newHeroes = [...state.heroes, action.payload];

            return {
                ...state,
                heroes: newHeroes,
                filters: getFilters(newHeroes)
            };
        }

        // Удаление героя
        case 'HERO_DELETED': {
            const newHeroes = state.heroes.filter(
                hero => hero.id !== action.payload
            );

            const newFilters = getFilters(newHeroes);

            return {
                ...state,
                heroes: newHeroes,
                filters: newFilters,
                activeFilter: newFilters.includes(state.activeFilter)
                    ? state.activeFilter
                    : 'all'
            };
        }

        // Выбор фильтра
        case 'FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload
            };

        default:
            return state;
    }
};

export default reducer;

