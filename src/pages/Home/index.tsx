import { SyntheticEvent, useState } from 'react'
import Button from '../../components/shared/Button/index';
function Home() {
  const [email, setEmail] = useState('');


  // devemos receber o valor digitado pelo usuario no input de email e enviar uma requisção para api do tipo POST.
  // para cadastrar o usuario ou consultar o usuário caso já exista.
  const handleSubmit = (evento: SyntheticEvent) => {
    evento.preventDefault();
    console.log(evento);
  }

  const onChangeInput = (event: any) => {
    setEmail(event.target.value);
  }

  return(
    <>
      <p>Cadastre espaços para <strong>devs</strong> e encontre <strong>grandes</strong> profissionais.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:*</label>
        <input 
          type="email" 
          id="email"
          placeholder="Informe o seu melhor e-mail"
          onChange={onChangeInput}
          required
          autoComplete="off"
        />
        <button type="submit" className="btn">Entrar</button>
        <p>{email}</p>
      </form>

      <Button texto="Enviar" estilo="sucesso"/>
      <Button texto="cancelar" estilo="perigo"/>
      <Button texto="teste" estilo="atencao"/>
    </>
  )
}

export default Home;