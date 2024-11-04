
const Login = () => {
    return (
        <>
            <header>
                <nav>
                    <img src="./../../../public/vite.svg" alt="" />
                    <div>
                        <select name="language" id="">
                            <option value="Español" selected>Español</option>
                            <option value="English">English</option>
                        </select>
                        <button type="button">INICIAR SESION</button>
                    </div>
                </nav>
            </header>
            <main>
                <h1>Películas y series ilimitadas y mucho más</h1>
                <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
                <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
                <div>
                    <input type="text" name="email" id="" />
                    <button>Comenzar</button>
                </div>
            </main>
        </>
    );
};

export default Login;