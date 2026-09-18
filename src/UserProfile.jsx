import style from './css/style.module.css'

function UserProfile()
{
  return(
    <div>
      <h1 className={style.heading}>Use profile</h1>
      <div>
        <img className= {style.image} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
        <div>
          <h4>Sonu Kumar</h4>
          <div>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;