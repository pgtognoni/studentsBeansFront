import './styles.css'

const PostOwner = (props) => {
    const { data } = props
    console.log(data)
    return (
        <div className='owner-container'>
            <div>
                <img src={data.owner.profile_pic_url} alt='post owner icon' />
            </div>
            <div className='owner_informtion'>
                <p className='owner_name'>{data.owner.username}</p>
                <p className='owner_location'>{data.location.name}</p>
            </div>
        </div>
    )
}

export default PostOwner