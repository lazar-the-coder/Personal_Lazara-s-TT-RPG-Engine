let attributeList = [
    {
        name: "Strength",
        bonus: 0
    },
    {
        name: "Agility",
        bonus: 1
    }
]

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
        base: 0
    };

    render() {
        return (
            <div className="attr">
                <h3 className="words">{this.props.name}</h3>
                <button className="sub unit">-</button><p className="unit">{this.state.base}</p><button className="add unit">+</button>
                <p className="unit">{this.props.bonus}</p>
                <p className="unit">{this.state.base + this.props.bonus}</p>
                <p className="unit">{Math.min(Math.max(this.state.base + this.props.bonus, 2), 4)}d6</p>
                <p className="unit">{(this.state.base + this.props.bonus)*4 + 1}</p>
            </div>
        );
    }
}

const GameAttriSet = (props) => (
    <section>
    {props.attributes.map(attribute => 
        <GameAttri
        name={attribute.name}
        base={attribute.base}
        bonus={attribute.bonus}
        key={attribute.base}
        />
    )}
    </section>
);

ReactDOM.render(
    [<Lump />, <GameAttriSet attributes={attributeList} />],
    document.getElementsByTagName('body')[0]
);