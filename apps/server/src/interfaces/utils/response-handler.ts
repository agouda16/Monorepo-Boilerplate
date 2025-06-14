import { Response } from "express";

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Use a generic type for metadata so you can specify it if needed, fallback to unknown object shape
type Metadata = Record<string, unknown>;

interface ResponseOptions<T, M = Metadata> {
  data: T;
  message?: string;
  statusCode?: number;
  metadata?: M;
  pagination?: Pagination;
  warnings?: string[];
  softErrors?: string[];
  locale?: string;
}

// Error response options
interface ErrorOptions<M = Metadata> {
  error: string;
  statusCode?: number;
  type?: string;
  metadata?: M;
  warnings?: string[];
  softErrors?: string[];
  locale?: string;
}

// --- SUCCESS HANDLER ---
export const sendSuccess = <T, M = Metadata>(
  res: Response,
  {
    data,
    message = "Success",
    statusCode = 200,
    metadata,
    pagination,
    warnings,
    softErrors,
    locale,
  }: ResponseOptions<T, M>
): void => {
  const traceId = res.locals.traceId;

  // Compose metadata merging user metadata with traceId and locale
  const mergedMetadata = { ...metadata, traceId, locale };

  const response = {
    success: true,
    message,
    data,
    metadata: mergedMetadata,
    ...(pagination && { pagination }),
    ...(warnings && { warnings }),
    ...(softErrors && { softErrors }),
  };

  res.status(statusCode).json(response);
};

// --- ERROR HANDLER (MANUAL) ---
export const sendError = <M = Metadata>(
  res: Response,
  {
    error,
    statusCode = 400,
    type = "ClientError",
    metadata,
    warnings,
    softErrors,
    locale,
  }: ErrorOptions<M>
): void => {
  const traceId = res.locals.traceId;

  const mergedMetadata = { ...metadata, traceId, locale };

  const response = {
    success: false,
    error,
    type,
    metadata: mergedMetadata,
    ...(warnings && { warnings }),
    ...(softErrors && { softErrors }),
  };

  res.status(statusCode).json(response);
};
