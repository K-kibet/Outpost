import React, { useState } from 'react';
import Icon from '../gallery.png';

export default function Write() {
    const [title, SetTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState(null);

    const [facebook, setFacebook] = useState(false);
    const [twitter, setTwitter] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [linkedin, setLinkedin] = useState(false);
    const [pinterest, setPinterest] = useState(false);

    const [hashnode, setHashnode] = useState(false);
    const [medium, setMedium] = useState(false);
    const [morioh, setMorioh] = useState(false);
    const [dev, setDev] = useState(false);
    const [sitepoint, setSitepoint] = useState(false);


    const [discord, setDiscord] = useState(false);
    const [reddit, setReddit] = useState(false);
    const [blogger, setBlogger] = useState(false);
    const [paetron, setPaetron] = useState(false);
    const [buyCoffee, setBuyCoffee] = useState(false);


    const handleSubmit = () => {

    }
  return (
    <div className='write'>
        <form onSubmit={handleSubmit}>
            <h1>Write And Post</h1>
            <input type="text" placeholder='Type your post title (required)' id='title'  onChange={(e) => SetTitle(e.target.value)}/>
            <textarea rows="10" placeholder="Let's tell an awesome story..." onChange={(e) => setDescription(e.target.value)}></textarea>
            <div className="upload">
                {!image && <label htmlFor="attachment">Upload File or Drag and Drop</label>}
                <input type="file" accept='images/*' id='attachment' onChange={(e) => setImage(e.target.files[0])}/>
                {!image && <img src={Icon} alt="image-icon" />}
                {image && (
                    <img className="writeImg" src={URL.createObjectURL(image)} alt="post-image" id='file'/>
                )}
                
            </div>
            <div className="tags">
                <div className="tagsWrapper">
                    <div className='tag'><div>FOOTBALL</div> <span>X</span></div>
                </div>
                <input type="text" placeholder='Add tags...'/>
            </div>
            <button type='submit'>PUBLISH</button>
        </form>
        <aside>
            <h1>Add Your Accounts:</h1>
            <div className="item">
                <label htmlFor="facebook">Facebook</label>
                <input type="checkbox" id='facebook'/>
            </div>
            <div className="item">
                <label htmlFor="twitter">Twitter</label>
                <input type="checkbox" id='twitter'/>
            </div>
            <div className="item">
                <label htmlFor="instagram">Instagram</label>
                <input type="checkbox" id='instagram'/>
            </div>
            <div className="item">
                <label htmlFor="linkedin">Linkedin</label>
                <input type="checkbox" id='linkedin'/>
            </div>

            <div className="item">
                <label htmlFor="pinterest">Pinterest</label>
                <input type="checkbox" id='pinterest'/>
            </div>

            <hr />

            <div className="item">
                <label htmlFor="hashnode">Hashnode</label>
                <input type="checkbox" id='hashnode'/>
            </div>
            <div className="item">
                <label htmlFor="medium">Medium</label>
                <input type="checkbox" id='medium'/>
            </div>
            <div className="item">
                <label htmlFor="morioh">Morioh</label>
                <input type="checkbox" id='morioh'/>
            </div>
            <div className="item">
                <label htmlFor="dev">Dev.to</label>
                <input type="checkbox" id='dev'/>
            </div>
            <div className="item">
                <label htmlFor="sitepoint">Sitepoint</label>
                <input type="checkbox" id='sitepoint'/>
            </div>

            <hr />

            <div className="item">
                <label htmlFor="discord">Discord</label>
                <input type="checkbox" id='discord'/>
            </div>
            <div className="item">
                <label htmlFor="reddit">Reddit</label>
                <input type="checkbox" id='reddit'/>
            </div>
            <div className="item">
                <label htmlFor="blogger">Blogger</label>
                <input type="checkbox" id='blogger'/>
            </div>
            <div className="item">
                <label htmlFor="paetron">Paetron</label>
                <input type="checkbox" id='paetron'/>
            </div>
            <div className="item">
                <label htmlFor="buyCoffee">Buy Me Coffee</label>
                <input type="checkbox" id='buyCoffee'/>
            </div>
        </aside>
    </div>
  );
}
