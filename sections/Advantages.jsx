'use client'

const advantages = [
    { id: 1, title: 'Title 1', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, repellendus non. Veniam sequi iure non recusandae sit? Quis, facere ad?' },
    { id: 2, title: 'Title 2', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, repellendus non. Veniam sequi iure non recusandae sit? Quis, facere ad?' },
    { id: 3, title: 'Title 3', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, repellendus non. Veniam sequi iure non recusandae sit? Quis, facere ad?' },
    { id: 4, title: 'Title 4', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, repellendus non. Veniam sequi iure non recusandae sit? Quis, facere ad?' },
];

let count = 0;

export default function Advantages() {
    return (
        <section className="advantages fade-in">
            <div className="container">
                <h2 className="my-title">
                    <p>More features</p>
                    <span>Promptverse AI</span> offers to an individual
                </h2>

                <div className="advantages__items">
                    {advantages.map((item, index) => {

                        const side = Math.floor(index / 2) % 2 === 0
                            ? 'advantages-left'
                            : 'advantages-right';

                        return (
                            <div key={item.id} className={`advantages__item ${side}`}>
                                <h3 className="advantages__title">{item.title}</h3>
                                <div className="advantages__info">
                                    <div className="advantages__icon">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <p className="advantages__text">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}