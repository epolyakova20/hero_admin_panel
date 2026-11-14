import { useDispatch, useSelector } from 'react-redux';
import { filterChanged } from '../../actions';

const HeroesFilters = () => {
    const { filters, activeFilter } = useSelector(state => state);
    const dispatch = useDispatch();

    const filterNames = {
        fire: 'Огонь',
        water: 'Вода',
        wind: 'Ветер',
        earth: 'Земля'
    };

    const filterClasses = {
        fire: 'btn-danger',
        water: 'btn-primary',
        wind: 'btn-success',
        earth: 'btn-secondary'
    };

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">
                    Отфильтруйте героев по элементам
                </p>

                <div className="btn-group">
                    <button
                        className={`btn btn-outline-dark ${
                            activeFilter === 'all' ? 'active' : ''
                        }`}
                        onClick={() => dispatch(filterChanged('all'))}
                    >
                        Все
                    </button>

                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`btn ${filterClasses[filter] || 'btn-outline-dark'} ${
                                activeFilter === filter ? 'active' : ''
                            }`}
                            onClick={() => dispatch(filterChanged(filter))}
                        >
                            {filterNames[filter] || filter}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroesFilters;

