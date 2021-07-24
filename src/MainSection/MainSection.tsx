import './mainsection.scss';

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="item">
        <div className="drag">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="18" height="1" fill="#BBBBBB"/>
            <rect y="4.5" width="18" height="1" fill="#BBBBBB"/>
            <rect y="8.5" width="18" height="1" fill="#BBBBBB"/>
          </svg>
        </div>
        <div className="img-item">
          <img src="#" alt="icon" />
        </div>
        <div className="options">
          <div className="short-options">
            <div className="header-list">
              <h4 className="item-header">header</h4>
              <p>number</p>
            </div>
            <p className="short-text">short text</p>
            <p className="author">author</p>
            <div className="tags">tags</div>
            <button className="install">install</button>
          </div>
          <div className="long-options">
            <div className="long-text">
              <h6 className="section-header">section header</h6>
              <p className="section-long-text">long text</p>
            </div>
            <div className="second-sec">
              <div className="second-sub-sec">
                <h6 className="section-header">section header</h6>
                <p className="section-text">section text</p>
              </div>
              <div className="second-sub-sec">
                <h6 className="section-header">section header</h6>
                <p className="section-text">section text</p>
              </div>
              <div className="second-sub-sec">
                <h6 className="section-header">section header</h6>
                <p className="section-text">section text</p>
              </div>
            </div>
            <div className="third-sec">
              <div className="third-sub-sec">
                <h6 className="section-header">section header</h6>
                <p className="section-text">section text</p>
              </div>
              <div className="third-sub-sec">
                <h6 className="section-header">section header</h6>
                <p className="section-text">section text</p>
              </div>
              <div className="third-sub-sec">
                <h6 className="section-header">section header</h6>
                <p className="section-text">section text</p>
              </div>
            </div>
            <div className="fourth-sec">
              <div className="fourth-sub-sec">
                <h6 className="section-header">section header</h6>
                <p className="section-text">section text</p>
              </div>
              <div className="fourth-sub-sec">
                <h6 className="section-header">section header</h6>
                <p className="section-text">section text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection;
