import crypto from "node:crypto";

const methodOK = (req, res, result) => {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();
  const totalDataCount = Array.isArray(result) ? result.length : result ? 1 : 0;
  const formattedDataCount = totalDataCount.toLocaleString("es-MX");

  res.status(200).json({
    success: true,
    data: result || {},
    message: "Consulta realizada correctamente",
    metadata: {
      timestamp: timestamp,
      requestId: requestId,
      dataCount: formattedDataCount,
    },
  });
};

const methodCreated = (req, res, result) => {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();

  res.status(201).json({
    success: true,
    data: result,
    message: "Recurso creado exitosamente",
    metadata: {
      timestamp: timestamp,
      requestId: requestId,
      dataCount: Array.isArray(result) ? result.length : result ? 1 : 0,
    },
  });
};

const methodIncorrect = (req, res, message) => {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();

  res.status(400).json({
    success: false,
    error: {
      message: message || "Solicitud incorrecta. Verifica los datos enviados.",
      code: "BAD_REQUEST",
      details:
        "Algunos de los campos proporcionados no son válidos o están incompletos.",
      timestamp: timestamp,
      requestId: requestId,
    },
  });
};
const methodUnauthorized = (req, res, message) => {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();

  res.status(401).json({
    success: false,
    error: {
      message:
        "No autorizado. Es necesario autenticarse para acceder a este recurso.",
      code: "UNAUTHORIZED",
      details:
        message || "La solicitud requiere un token de autenticación válido.",
      timestamp: timestamp,
      requestId: requestId,
      stack: error.stack || "No se dispone de información adicional.",
      path: req.originalUrl,
      method: req.method,
    },
  });
};

const methodForbidden = (req, res, message) => {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();

  res.status(403).json({
    success: false,
    error: {
      message: message,
      code: "FORBIDDEN",
      timestamp: timestamp,
      requestId: requestId,
      path: req.originalUrl,
      method: req.method,
    },
  });
};

const methodNotFound = (req, res, message) => {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();

  res.status(404).json({
    success: false,
    error: {
      message: message || "Recurso no encontrado.",
      code: "NOT_FOUND",
      details: "El recurso que buscas no existe o no está disponible.",
      timestamp: timestamp,
      requestId: requestId,
    },
  });
};

const methodConflicts = (req, res, error) => {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();

  res.status(409).json({
    success: false,
    error: {
      message:
        error.message ||
        "Conflicto. El recurso ya existe o hay un conflicto con la solicitud.",
      code: "CONFLICT",
      details:
        "El recurso que intentas crear ya existe o la solicitud genera un conflicto con los datos actuales.",
      timestamp: timestamp,
      requestId: requestId,
      path: req.originalUrl,
      method: req.method,
    },
  });
};

const methodError = (req, res, error) => {
  const timestamp = new Date().toISOString();
  const errorId = crypto.randomUUID();

  res.status(500).json({
    success: false,
    error: {
      message: error.message || "Se produjo un error inesperado.",
      code: "INTERNAL_SERVER_ERROR",
      details:
        "Ocurrió un problema en el servidor. Por favor, intenta más tarde.",
      timestamp: timestamp,
      errorId: errorId,
      stack: error.stack || "No se dispone de información adicional.",
      path: req.originalUrl,
      method: req.method,
    },
  });
};

export {
  methodOK,
  methodCreated,
  methodIncorrect,
  methodUnauthorized,
  methodForbidden,
  methodNotFound,
  methodConflicts,
  methodError,
};
