import './ColorCodes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faClock, // the clock icon
    faCircle // the user circle icon
} from '@fortawesome/free-solid-svg-icons'

const ColorCodes = () => {
    return <div className='icons'>
      <span className='sorted'><FontAwesomeIcon icon={faCircle} />&nbsp;<h1 className='text'> Sorted</h1></span>
       <span className='swap'><FontAwesomeIcon icon={faCircle} />&nbsp; <h1 className='text'>Swap</h1></span>
        <span className='selected'><FontAwesomeIcon icon={faCircle} />&nbsp; <h1 className='text'>Selected</h1></span>
    </div>
}
export default ColorCodes