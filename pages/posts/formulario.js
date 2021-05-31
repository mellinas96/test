import Link from 'next/link'
function About() {
  return <div>
	<h1> Gestión básica de usuarios </h1>
        <main>
            <form action="validr-1.php" method="get">
                <p>Usuario y contraseña:</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Nombre: </td>
                            <td>
                                <input type="text" name="usuario" size="15" maxlength="15" autofocus=""></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Contraseña: </td>
                            <td>
                                <input type="password" name="password" size="20" maxlength="20" autofocus=""></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <input type="submit" value="Añadir"></input>
                </p>
            </form>
        </main>
      	  <p className="title">
        	<Link href="/">
          		<a>Back to home</a>
        	</Link>
      	  </p>
	</div>
}

export default About