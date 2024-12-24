import { useState } from 'react';
import styles from './Main.module.css';
const Main = () => {
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [hours, setHours] = useState(0);

    const handleAdd = (e) => {
        e.preventDefault();
        if (subject && hours > 0) {
            setSubjects([...subjects, { subject, hours }]);
            setSubject('');
            setHours(0);
        }
    };

    const handleIncrease = (index) => {
        const updatedSubjects = subjects.map((item, idx) =>
            idx === index ? { ...item, hours: item.hours + 1 } : item
        );
        setSubjects(updatedSubjects);
    };

    const handleDecrease = (index) => {
        const updatedSubjects = subjects.map((item, idx) =>
            idx === index && item.hours > 0 ? { ...item, hours: item.hours - 1 } : item
        );
        setSubjects(updatedSubjects);
    };

    const deleteIt = (idx) => {
        const updatedSubjects = subjects.filter((_, index) => index !== idx);
        setSubjects(updatedSubjects);
    };

    return (
        <>
            <h1 className={styles.head}>Educators Plan</h1>
            <div className={styles.ipContainer}>
                <form onSubmit={handleAdd}>
                    <input
                        className={styles.ip1}
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <input
                        className={styles.ip2}
                        type="number"
                        placeholder="Hours"
                        min="0"
                        max="100"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                    />
                    <button type="submit">ADD</button>
                </form>
                <ul>
                    {subjects.map((ele, idx) => (
                        <div className={styles.listItem} key={idx}>
                            <h3>{ele.subject}</h3>
                            <h3>{ele.hours} Hours</h3>
                            <button className={styles.add} onClick={() => handleIncrease(idx)}>+</button>
                            <button className={styles.sub} onClick={() => handleDecrease(idx)}>-</button>
                            <img
                                onClick={() => deleteIt(idx)}
                                src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                                alt="Delete"
                            />
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Main;
