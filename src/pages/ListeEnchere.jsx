function ListeEnchere() {
    return (
        <>
            <div className="site-section">
                <div className="container">
                    <h1 className="h1 mb-3 text-black">Ameublement</h1>
                    <p className="text-black">Adepte du mobilier empire, collectionneur de pièces de design contemporain ou à la recherche de bonnes affaires sur la décoration ?.</p>
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="h2 mb-3 text-black">Filtrer</h2>
                        </div>
                        <div className="col-md-12">
                            <form action="#" method="post">
                                <div className="p-3 p-lg-5 border">
                                    <div className="form-group row">
                                        <div className="col-md-4">
                                            <label for="c_fname" className="text-black">Du <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="c_fname" className="text-black">Prix minimum <span className="text-danger">*</span></label>
                                            <input type="number" step="any" className="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="c_fname" className="text-black">Mot cle <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-4">
                                            <label for="c_fname" className="text-black">Au <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="c_fname" className="text-black">Prix maximum <span className="text-danger">*</span></label>
                                            <input type="number" step="any" className="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <input type="submit" className="btn btn-primary btn-lg btn-block" value="Filtrer" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
        </>
    );
}

export default ListeEnchere;