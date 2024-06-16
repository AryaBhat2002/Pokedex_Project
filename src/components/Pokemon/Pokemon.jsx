import { Link } from 'react-router-dom';
import './Pokemon.css'
import PropTypes from 'prop-types'

function Pokemon({ name, image , id }) {
    return(
        <div className='pokemon'>
            <Link to={`/pokemon/${id}`}>
                <div className='pokemon-name'>{name}</div>
                <div>
                    <img className='pokemon-image' src={image} />
                </div>
            </Link>
        </div>
    )
}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Pokemon;