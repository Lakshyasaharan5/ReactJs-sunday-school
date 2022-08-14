import { MeetingsFilterProps } from '../../types/interfacesAndTypes'

const MeetingsFilter = (props:MeetingsFilterProps) => {

  // const sermonType = ["meetings","series"]; 
  // const [meetingsDisplay,setMeetingsDisplay] = useState("meetings");
  return (
    <div className=' grid grid-cols-1 border shadow py-3 bg-white'>
        
      <div className='grid'>
          
          {props.sermonType.map(result=>(
            <div key={result}>
              <input type="radio" value={result} name="sermonType" checked={props.meetingsDisplay===result} onChange={(e)=>props.setMeetingsDisplay(e.target.value)} /> {result}
            </div>
          ))}
          
      </div>
      {props.meetingsDisplay}

    </div>
  )
}

export default MeetingsFilter