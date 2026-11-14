import { useDispatch } from 'react-redux';
import { heroCreated } from '../../actions';

const HeroesAddForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get('name').trim();
        const description = formData.get('text').trim();
        const element = formData.get('element');

        const newHero = {
            id: crypto.randomUUID(),
            name,
            description,
            element
        };

        dispatch(heroCreated(newHero));

        e.currentTarget.reset();
    };

    return (
        <form
            className="border p-4 shadow-lg rounded"
            onSubmit={handleSubmit}
        >
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">
                    Имя нового героя
                </label>

                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">
                    Описание
                </label>

                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    style={{ height: '130px' }}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">
                    Выбрать элемент героя
                </label>

                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Я владею элементом...
                    </option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">
                Создать
            </button>
        </form>
    );
};

export default HeroesAddForm;

