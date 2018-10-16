const Pet = (props) => {
    return React.createElement("div",{},
        React.createElement("h1",{},props.name),
        React.createElement("h1",{},props.animal),
        React.createElement("h1",{},props.breed)
    )
} 


class App extends React.Component 
{
    TitleClick() {
        alert('Click Adopt Me!');
    }

    render() {
        return React.createElement("div",{}, [
            React.createElement("h1",{ onClick: this.TitleClick },'Adopt Me!'),
            React.createElement(Pet, {
                name: 'Dongi',
                animal: 'Dog',
                breed: 'Havanese'
            }),
            React.createElement(Pet, {
                name: 'Cati',
                animal: 'Cat',
                breed: 'Mixed'
            })
        ])
    }
}

ReactDOM.render(React.createElement(App),document.getElementById('root'));