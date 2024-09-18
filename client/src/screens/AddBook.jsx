import React, { useState } from "react";
import axios from "axios";
import AdminHeader from "../components/AdminHeader";

const AddBook = () => {
    const [issueid, setIssueID] = useState('');
    const [series, setSeries] = useState('');
    const [seriesjp, setSeriesJP] = useState('');
    const [issue, setIssue] = useState('');
    const [issuejp, setIssueJP] = useState('');
    const [publisher, setPublisher] = useState('');
    const [isbn, setISBN] = useState(0);

    const addBookHandler = async (e) => {
        e.preventDefault();
        const data = {
            issueid: issueid,
            series: series,
            seriesjp: seriesjp,
            issue: issue,
            issuejp: issuejp,
            publisher: publisher,
            isbn: isbn
        };
        await axios.post('/api/books/addbook', data);
    };

    return (
        <>
            <AdminHeader />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 px-5 my-3 text-custom bg-transparent-white">
                        <h2 className="display-6 fw-bolder text-custom mb-4 text-center">Add New Book</h2>
                        <div className="p-4 border rounded shadow-sm bg-light">
                            <form onSubmit={addBookHandler}>
                                <div className="mb-3">
                                    <label className="form-label">Issue ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={issueid}
                                        onChange={(e) => setIssueID(e.target.value)}
                                        placeholder="Enter Issue ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Series Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={series}
                                        onChange={(e) => setSeries(e.target.value)}
                                        placeholder="Enter Series Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Series Name JP</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={seriesjp}
                                        onChange={(e) => setSeriesJP(e.target.value)}
                                        placeholder="Enter Series Name JP"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Issue Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={issue}
                                        onChange={(e) => setIssue(e.target.value)}
                                        placeholder="Enter Issue Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Issue Name JP</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={issuejp}
                                        onChange={(e) => setIssueJP(e.target.value)}
                                        placeholder="Enter Issue Name JP"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Publisher</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={publisher}
                                        onChange={(e) => setPublisher(e.target.value)}
                                        placeholder="Enter Publisher"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">ISBN</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={isbn}
                                        onChange={(e) => setISBN(e.target.value)}
                                        placeholder="Enter ISBN"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 text-light">
                                    Add Book
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBook;
