
export const Form = () => {
    
    return(
        <div className="main">
           <h2 className="sign">Bem-vindo!</h2>

           <form className="form">
              <input type="email" className="username" placeholder="Email" />
              <input type="password" className="password" placeholder="Senha" />

              <a href="#" className="submit">Entrar</a>

              <p>
                 <a href="#" className="forgot">Esqueceu a senha?</a>
              </p>
              <p className="cads">Não tem cadastro? <a href="#">cadastre-se</a> já!</p>
           </form>
        </div>
    );
};