const Head = () => (
    <h1>Attributes</h1>
);

const Lump = () => (
    <header>
        <Head />
    </header>
);

class GameAttri extends React.Component {
    state = {
        base: 2,
        bonus: 0,
        final: 0,
        dice: 0,
        diff: 0
    };

    recalculate(base) {
        this.setState({
            final: base + this.state.bonus,
            dice: Math.min(Math.max(base + this.state.bonus, 2), 4),
            diff: (base + this.state.bonus)*3 + 3
        });
    }

    incrementAttr(num) {
        let newVal = this.state.base + num
        if (num > 0) {
            if (this.state.base < 5) {
                this.setState({
                    base: newVal
                });
                this.recalculate(newVal)
            }
        } else {
            if (this.state.base > 1) {
                this.setState({
                    base: newVal
                });
                this.recalculate(newVal)
            }
        }
    }

    render() {
        return (
            <div className="attr">
                <h3 className="words">{this.props.name}</h3>
                <button className="sub unit" onClick={() => this.incrementAttr(-1)}>-</button><p className="unit">{this.state.base}</p><button className="add unit"onClick={() => this.incrementAttr(1)}>+</button>
                <p className="unit">{this.state.bonus}</p>
                <p className="unit">{this.state.final}</p>
                <p className="unit">{this.state.dice}d6</p>
                <p className="unit">{this.state.diff}</p>
            </div>
        );
    }
}

class GameAttriSet extends React.Component {
    state = {
        attributeList: ["Strength"]
    };


    loadAttr(val) {
        let allAtrri = val.split(" ");
        this.setState( prevState => {
            return {
                attributeList: allAtrri
            };
        });
    }

    render() {
        return (
            <section>
                <input type="text" id="attri-list" name="list"></input>
                <button onClick={() => this.loadAttr(document.getElementById('attri-list').value)}>Load</button>
            {this.state.attributeList.map(attribute => 
                <GameAttri
                name={attribute}
                />
            )}
            </section>
        );
    }
}

ReactDOM.render(
    [<Lump />, <GameAttriSet />],
    document.getElementsByTagName('body')[0]
);