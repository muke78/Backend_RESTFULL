import crypto from 'node:crypto';

const timestamp = new Date().toISOString();
const requestId = crypto.randomUUID();
const errorId = crypto.randomUUID();

const methodOK = (req, res, result) => {
  res.status(200).json({
    success: true,
    data: result,
    message: 'Consulta realizada correctamente',
    metadata: {
      timestamp: timestamp,
      requestId: requestId,
      dataCount: Array.isArray(result) ? result.length : result ? 1 : 0,
    },
  });
};

const methodCreated = (req, res, result) => {
  res.status(201).json({
    success: true,
    data: result,
    message: 'Recurso creado exitosamente',
    metadata: {
      timestamp: timestamp,
      requestId: requestId,
      dataCount: Array.isArray(result) ? result.length : result ? 1 : 0,
    },
  });
};

const methodIncorrect = (req, res) => {
  res.status(400).json({
    success: false,
    error: {
      message: 'Solicitud incorrecta. Verifica los datos enviados.',
      code: 'BAD_REQUEST',
      details:
        'Algunos de los campos proporcionados no son válidos o están incompletos.',
      timestamp: timestamp,
      requestId: requestId,
    },
  });
};
const methodUnauthorized = (req, res) => {
  res.status(401).json({
    success: false,
    error: {
      message:
        'No autorizado. Es necesario autenticarse para acceder a este recurso.',
      code: 'UNAUTHORIZED',
      details: 'La solicitud requiere un token de autenticación válido.',
      timestamp: timestamp,
      requestId: requestId,
    },
  });
};

const methodNotFound = (req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Recurso no encontrado.',
      code: 'NOT_FOUND',
      details: 'El recurso que buscas no existe o no está disponible.',
      timestamp: timestamp,
      requestId: requestId,
    },
  });
};

const methodConflicts = (req, res) => {
  res.status(409).json({
    success: false,
    error: {
      message:
        'Conflicto. El recurso ya existe o hay un conflicto con la solicitud.',
      code: 'CONFLICT',
      details:
        'El recurso que intentas crear ya existe o la solicitud genera un conflicto con los datos actuales.',
      timestamp: timestamp,
      requestId: requestId,
    },
  });
};

const methodError = (req, res, error) => {
  res.status(500).json({
    success: false,
    error: {
      message: error.message,
      code: 'INTERNAL_SERVER_ERROR',
      details:
        'Ocurrió un problema en el servidor. Por favor, intenta más tarde.',
      timestamp: timestamp,
      errorId: errorId,
    },
  });
};

export {
  methodOK,
  methodCreated,
  methodIncorrect,
  methodUnauthorized,
  methodNotFound,
  methodConflicts,
  methodError,
};
