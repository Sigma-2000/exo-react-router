import {useState} from 'react';
const Page1 = () => {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nom saisi: ${name}`);
      };
    return (
        <div>
           <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    );
};

export default Page1;