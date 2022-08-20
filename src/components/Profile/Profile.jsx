import MyPosts from './myPosts/Post/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src="https://abc-decor.com/img/gallery/22/thumbs/thumb_l_9666.jpg" />
        </div>
        <div>
          Avatar + description
        </div>
       <MyPosts />
      </div>
    );
}

export default Profile;