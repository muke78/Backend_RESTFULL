# Cambios pendientes

## Cambios importantes

- Hacer la api de los estudiantes
- Hacer el trigger para que cuando se agregue un alumno a una maestra los niños a cargo en la tabla maestros incremente solo

- Hacer la api en usuarios de buscar un usuario
- Hacer la api en usuarios de ver los usuarios eliminados
- Arreglar la funciones de eliminacion de usuarios y que se elimine directo el maestro
- Arreglar la funcion de eliminacion de un maestro y que se elimine directo el usuario
- Poner el verificador de token cuando se acabe bien el modulo de usuarios en los routes

## Cambios que se puedan ir haciendo

- Hacer la documentacion en postman para posteriormente publicarla
- Ir adecuando el codigo poco a poco el codigo en ingles
- Adecuar bien la funcion de que cuando se edite un maestro, o papa o usuario, si pone un correo que ya existe, no lo pude dejar actualizar

```javascript
if (email) {
      const queryValidateEmailUpdate = `SELECT * FROM users WHERE Email = ?`;
      const queryParamsEmailUpdate = [email];
      const resulQueryEmailValidate = await connectionQuery(
        queryValidateEmailUpdate,
        queryParamsEmailUpdate
      );
      if (resulQueryEmailValidate.length > 0)
        return res.status(409).json({
          message: 'Usuario ya existe y el correo esta siendo utilizado',
        });
    }
```
