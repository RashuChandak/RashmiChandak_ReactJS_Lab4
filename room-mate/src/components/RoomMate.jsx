import { Component } from "react";

class RoomMate extends Component {
    constructor(props){
        super(props);
        this.state = {
            payeeName: "",
            product: "",
            price: 0,
            setDate: this.setDefaultDate(),
        };

        this.setpayee = this.setpayee.bind(this);
        this.setProduct = this.setProduct.bind(this);
        this.setPrice = this.setPrice.bind(this);
        this.loggedDate = this.loggedDate.bind(this);
    }

    setDefaultDate = () => {
        const today = new Date();
        return (
            today.getFullYear() +
            "-" +
            ("0" + (today.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + today.getDate()).slice(-2));
        
    };

    setpayee = (event) => {
        this. setState({
            payeeName: event.target.value,
        });
    };

    setProduct = (event) => {
        this. setState({
            product: event.target.value,
        });
    };

    setPrice = (event) => {
        this. setState({
            price: parseInt(event.target.value),
        });
    };

    loggedDate = (e) => {
        this. setState({
            setDate: e.target.value,
        });
    };
    render() {
        return (
            <>
            <section>
                <header>
                    <h1>Add New Item</h1>
                    <p>
                        Read the below instructions before proceeding:
                        <br /> Makesure you fill all the fields where * is provided
                    </p>
                </header>
                <form onSubmit={this.submitHandler}>
                    <article>
                        <p>Name</p>
                        <select
                            name="Name"
                            id="district"
                            requiredvalue={this.state.payeeName}
                            onChange={this.setpayee}>
                                <option value="" defaultChecked>
                                    Choose
                                </option>
                                <option value="Rahul">Rahul</option>
                                <option value="Ramesh">Ramesh</option>
                            </select>
                    </article>

                    <article>
                        <p>Product Purchased</p>
                        <input
                              type="text"
                              required
                              value={this.state.product}
                              onChange={this.setProduct}
                              />
                    </article>

                    <article>
                    <p>Amount Paid</p>
                    <input
                          type="number"
                          required
                          value={this.state.setPrice}
                          onChange={this.setPrice}
                          />
                    </article>

                    <article>
                    <p>Date</p>
                    <input
                        type="date"
                        required
                        value={this.state.setDate}
                        onChange={this.loggedDate}
                        />
                    </article>

                    <button 
                       type="button"
                       className="form-button"
                       onClick={this.props.onClose}
                       >
                        Close
                       </button>
                       <button className="form-button">Submit</button>
                </form>
            </section>
            </>
        );
    }
}

export default RoomMate;