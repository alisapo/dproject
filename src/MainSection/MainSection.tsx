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
          <img
            src="https://dapplets-hiring-api.herokuapp.com/api/v1/files/X8hJVUEzH6Q5N0g5npd0gz4rYPmvSek1ScQL8cmnIa8bLtXeAcRQJbLaoBAL-4YXIQ.webp"
            alt="icon"
            />
        </div>
        <div className="options">
          <div className="short-options">
            <div className="header-list">
              <h4 className="item-header">Diam lectus ornare</h4>
              <p>0xC12B5EE8F74BDE56B82EDD9D196D4653DA8E3836</p>
            </div>
            <p className="short-text">Fames pharetra viverra risus vulputate massa urna dolor.</p>
            <p className="author">debra.holt</p>
            <div className="tags">tags</div>
            <button className="install">install</button>
          </div>
          <div className="long-options">
            <div className="long-text">
              <h6 className="section-header">Aliquam sit</h6>
              <p className="section-long-text">Semper neque leo scelerisque gravida pharetra, elit viverra varius. Leo et pretium massa tristique mauris habitasse in in. Et cras sociis tellus viverra at dictumst quisque praesent arcu. Eu faucibus id at odio praesent. Ut nibh porta ipsum in eget id netus pharetra in. Ultrices scelerisque augue dui eget lacus, aenean cursus in. Consequat rhoncus egestas ultricies imperdiet diam. Imperdiet mollis egestas est faucibus sit tristique eu.</p>
            </div>
            <div className="second-sec">
              <div className="second-sub-sec">
                <h6 className="section-header">Semper neque</h6>
                <p className="section-text">Amet, porttitor gravida id</p>
              </div>
              <div className="second-sub-sec">
                <h6 className="section-header">Leo ipsum.</h6>
                <p className="section-text">Vulputate dolor nam in.</p>
              </div>
              <div className="second-sub-sec">
                <h6 className="section-header">Elit sagittis et.</h6>
                <p className="section-text">Ut molestie eros.</p>
              </div>
            </div>
            <div className="third-sec">
              <div className="third-sub-sec">
                <h6 className="section-header">Aliquam.</h6>
                <p className="section-text">Viverra dictum arcu.</p>
              </div>
              <div className="third-sub-sec">
                <h6 className="section-header">In euismod.</h6>
                <p className="section-text">Felis pretium neque.</p>
              </div>
              <div className="third-sub-sec">
                <h6 className="section-header">Justo amet.</h6>
                <p className="section-text">Nullam nec ultrices.</p>
              </div>
            </div>
            <div className="fourth-sec">
              <div className="fourth-sub-sec">
                <h6 className="section-header">Urna.</h6>
                <p className="section-text">Ultrices pellentesque.</p>
              </div>
              <div className="fourth-sub-sec">
                <h6 className="section-header">Nam diam.</h6>
                <p className="section-text">Elit accumsan leo non.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection;
