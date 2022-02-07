import React, {useState} from "react";


const LoginModal =() =>{

    const [state, setState] = useState({
        name: null,
        password: null
    })

    const handleChange = (evento) => {
        let datos = state;
        datos[evento.target.name] = evento.target.value;
        setState({ ...datos });
    }

    return(
        <>
            
            <div className="modal fade bs-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                <span aria-hidden="true">
                                    <i className="fa fa-close" />
                                </span>
                            </button>
                            <h4 className="modal-title" id="mySmallModalLabel"> Sign In </h4>
                                <form className="sm-frm" style={{ padding: 25 }}>
                                    <label>Name :</label>
                                    <input type="text" className="form-control" name="name" placeholder="Enter Email" onChange={handleChange} required />
                                    <label>Passoward :</label>
                                    <input type="text" className="form-control" name="password" placeholder="Enter Passoward" onChange={handleChange} required />
                                    <label>
                                        <input type="checkbox" name="personality" /> Remenber Me
                                    </label>
                                    <button type="button" className="btn btn-default pull-right" >  Submit </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginModal;