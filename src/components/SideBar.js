const SideBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100 bg-secondary">
          <ul className="p-0">
            <il>
              <a className="nav-link p-2">
                <i className="bi-house" />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </il>
            <il>
              <a className="nav-link p-2">
                <i className="bi-speedometer" />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </il>
            <il>
              <a className="nav-link p-2">
                <i className="bi-table" />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </il>
            <il>
              <a className="nav-link p-2">
                <i className="bi-heart" />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </il>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
