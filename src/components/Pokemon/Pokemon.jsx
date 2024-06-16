import './Pokemon.css'
import PropTypes from 'prop-types'

function Pokemon({ name, image }) {
    return(
        <div className='pokemon'>
            <div className='pokemon-name'>{name}</div>
            <div>
                <img className='pokemon-image' src={image} />
            </div>
        </div>
    )
}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Pokemon;