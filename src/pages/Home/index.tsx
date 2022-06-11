import { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button/index';
import { user } from '../../services/user';


function Home() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // devemos receber o valor digitado pelo usuario no input de email e enviar uma requisção para api do tipo POST.
  // para cadastrar o usuario ou consultar o usuário caso já exista.
  const handleSubmit = async (evento: SyntheticEvent) => {
    evento.preventDefault();

    const responseApi = await user.auth(email);
    console.log(responseApi);
    const { _id } = responseApi.data;
    console.log(_id);

    localStorage.setItem('user', _id);
    navigate('/dashboard');

    // console.log('é a chamada do fetch', fetch('https://pokeapi.co/api/v2/pokemon/')
    // .then(
    //   (response) => {
    //     console.log('é a resposta da promisse em caso de sucesso(resolve)', response);
    //     return response.json();
    //   }
    // ).then((response) => {
    //   console.log(response);
    //   console.log(response.results.map(
    //     (pokemon: any) => 
    //     console.log(pokemon.name)
    //   ));
    // }));

    // const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    // const data = await response.json();

    // console.log(data);

    
  }

  // const onChangeInput = (event: any) => {
  //   setEmail(event.target.value);
  // }

  return(
    <>
      <p>Cadastre espaços para <strong>devs</strong> e encontre <strong>grandes</strong> profissionais.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:*</label>
        <input 
          type="email" 
          id="email"
          placeholder="Informe o seu melhor e-mail"
          onChange={event => setEmail(event.target.value)}
          required
          autoComplete="off"
        />
        <button type="submit" className="btn">Entrar</button>
      </form>

      {/* <Button texto="Enviar" estilo="sucesso"/>
      <Button texto="cancelar" estilo="perigo"/>
      <Button texto="teste" estilo="atencao"/> */}
    </>
  )
}

export default Home;