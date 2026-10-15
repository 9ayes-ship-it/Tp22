
import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import StudentCard from "./components/StudentCard.jsx";
import studentImage from './assets/kais.jpg'
const student = [
 {
  key: "1",  
  nom: 'Kais',
  prenom: 'Salem',

  email: 'asdas@gmail.com',
  tel: '+216 56 444 199',
  filiere: 'GLSI',
  groupe: 'GLSI 2B',
  ville: 'Mahdia',
  annee: '2ème année',
  image: studentImage,
},
 {
    key:"2",
  nom: 'Slim',
  prenom: 'Boubaker',
  email: 'alimBou@gmail.com',
  tel: '+216 56 444 199',
  filiere: 'GLSI',
  groupe: 'GLSI 2B',
  ville: 'Mahdia',
  annee: '2ème année',
  image: studentImage,
},
 {
  key: "3",
  nom: 'Sara',
  prenom: 'Trabelsi',
  email: 'saratra@gmail.com',
  tel: '+216 56 444 199',
  filiere: 'GLSI',
  groupe: 'GLSI 2B',
  ville: 'Mahdia',
  annee: '2ème année',
  image: studentImage,
},
];

      function  App() {
        return(
          <><header className="App-header">
            <Header/>
          </header>


          <div className='container'>
              {student.map((student) => (
                <StudentCard

                  prenom={student.prenom}
                  nom={student.nom}
                  key={student.key}
                  email={student.email}
                  tel={student.tel}
                  filiere={student.filiere}
                  groupe={student.groupe}
                  ville={student.ville}
                  annee={student.annee}
                  image={student.image} />
              ))}
            </div>
            <footer>
              <Footer/>
            </footer>
            </>
        );

        }
        
    


export default App;
