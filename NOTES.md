# Cambios pendientes

## Cambios importantes

- Verificar testeos del catalogo de activos y de usuarios juntos y hacerlos
- Busar una forma mas segura de pasarle el token a los test
- Probar la funcion de token para el refresco del mismo, y hacer la docuemntacion en postman
- Excluir por aparte el controlador de google para el login, y tenerlo aparte (Sacarlo de los usuario y que tenga su propio espacio)

- `src/models/users/functions/register.models.js` - El uso de una subconsulta (SELECT status_id FROM cat_status WHERE name = 'Inactivo') es una gran mejora sobre el UUID hardcodeado. Sin embargo, realizar una subconsulta por cada INSERT puede tener un impacto en el rendimiento, especialmente en inserciones masivas. Una alternativa más eficiente sería obtener el status_id de 'Inactivo' una sola vez al iniciar la aplicación y cachearlo en una constante para reutilizarlo.


## Cambios que se puedan ir haciendo

- Ir adecuando el codigo poco a poco el codigo en ingles
