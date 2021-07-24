import { useEffect, useState } from 'react';
import FilterSection from '../FilterSection/FilterSection';

import './mainsection.scss';

const MainSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0&filter=[{%22property%22:%22title%22,%22value%22:%22privacy%22}]&sort=[{%22property%22:%22title%22,%22direction%22:%22ASC%22}]')
      .then(res => res.json())
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="main-section">
      <FilterSection />
      {data ?
      data.map((item: any) => {
        return (
        <div className="item" key={item.id}>
          <div className="short-options">
            <div className="drag">
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="18" height="1" fill="#BBBBBB" />
                <rect y="4.5" width="18" height="1" fill="#BBBBBB" />
                <rect y="8.5" width="18" height="1" fill="#BBBBBB" />
              </svg>
            </div>
            <div className="img-item">
              <img
                src={`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${item.icon}`}
                alt="icon"
              />
            </div>
            <div className="header-list">
              <h4 className="item-header">{item.title}</h4>
              <p>{item.address}</p>
            </div>
            <p className="short-text">{item.description}</p>
            <p className="author">{item.author}</p>
            <div className="tags">
              <div className="tag">
                Social media
                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path d="M0.999858 0.887826L2.99986 2.88783L4.99986 0.893886C5.03924 0.853819 5.0865 0.822359 5.13866 0.801495C5.19082 0.780631 5.24674 0.770817 5.30289 0.772674C5.41306 0.779804 5.51688 0.82679 5.59495 0.904859C5.67301 0.982927 5.72 1.08674 5.72713 1.19692C5.72768 1.25109 5.71722 1.30481 5.69638 1.35481C5.67555 1.40482 5.64477 1.45007 5.60592 1.48783L3.59986 3.49995L5.60592 5.51207C5.68471 5.58843 5.72834 5.69389 5.72713 5.80298C5.72 5.91315 5.67301 6.01697 5.59495 6.09504C5.51688 6.1731 5.41306 6.22009 5.30289 6.22722C5.24674 6.22908 5.19082 6.21926 5.13866 6.1984C5.0865 6.17753 5.03924 6.14607 4.99986 6.10601L2.99986 4.11207L1.00592 6.10601C0.966541 6.14607 0.919277 6.17753 0.867117 6.1984C0.814957 6.21926 0.759035 6.22908 0.702888 6.22722C0.590658 6.22138 0.48457 6.17417 0.405104 6.0947C0.325637 6.01523 0.278427 5.90915 0.272585 5.79692C0.272037 5.74275 0.282498 5.68903 0.303334 5.63902C0.32417 5.58902 0.354946 5.54376 0.393797 5.50601L2.39986 3.49995L0.387737 1.48783C0.34998 1.44956 0.320323 1.40408 0.300538 1.3541C0.280753 1.30411 0.271246 1.25066 0.272585 1.19692C0.279715 1.08674 0.326701 0.982927 0.404769 0.904859C0.482838 0.82679 0.586652 0.779804 0.696827 0.772674C0.752538 0.770028 0.808196 0.778887 0.860332 0.798699C0.912468 0.81851 0.959964 0.84885 0.999858 0.887826Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="6" height="6" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <button className="install">install</button>
          </div>
          <div className="long-options">
            <div className="long-text">
              <h6 className="section-header">Aliquam sit</h6>
              <p className="section-long-text">{item.text_1}</p>
            </div>
            <div className="second-sec">
              <div className="second-sub-sec">
                <h6 className="section-header">Semper neque</h6>
                <p className="section-text">{item.text_2}</p>
              </div>
              <div className="second-sub-sec">
                <h6 className="section-header">Leo ipsum.</h6>
                <p className="section-text">{item.text_3}</p>
              </div>
              <div className="second-sub-sec">
                <h6 className="section-header">Elit sagittis et.</h6>
                <p className="section-text">{item.text_4}</p>
              </div>
            </div>
            <div className="third-sec">
              <div className="third-sub-sec">
                <h6 className="section-header">Aliquam.</h6>
                <p className="section-text">{item.text_5}</p>
              </div>
              <div className="third-sub-sec">
                <h6 className="section-header">In euismod.</h6>
                <p className="section-text">{item.text_6}</p>
              </div>
              <div className="third-sub-sec">
                <h6 className="section-header">Justo amet.</h6>
                <p className="section-text">{item.text_7}</p>
              </div>
            </div>
            <div className="fourth-sec">
              <div className="fourth-sub-sec">
                <h6 className="section-header">Urna.</h6>
                <p className="section-text">{item.text_8}</p>
              </div>
              <div className="fourth-sub-sec">
                <h6 className="section-header">Nam diam.</h6>
                <p className="section-text">{item.text_9}</p>
              </div>
            </div>
          </div>
        </div>)}) : null
      }
    </div>
  )
}

export default MainSection;
