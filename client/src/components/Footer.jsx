const Footer =() => {
  return (
    <footer className="bg-white py-2 mt-auto">
    <div className="container">
      <div className="row align-items-center justify-content-between flex-column flex-sm-row">
        <div className="col-auto">
          <div className="small m-0">Copyright &copy; DollDB 2024</div>
        </div>
        <div className="col-auto">
          <a className="small" href="#!">FAQ</a>
          <span className="mx-1">&middot;</span>
          <a className="small" href="#!">Contact</a>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;