import { env, isR2Enabled } from "@/lib/env";

// ------------------------------------------------------------------
// Cloudflare R2 storage layer (Phase 0 stub).
//
// Until R2 credentials are configured, uploadBuffer() returns a mock
// URL so order/design flows can be exercised end-to-end locally.
// Real S3 client wiring lands alongside the upload route (Phase 1/4).
// ------------------------------------------------------------------

export interface UploadResult {
  url: string;
  key: string;
  mock: boolean;
}

/**
 * Upload a binary object to R2 and return its public URL.
 * @param key    object key, e.g. "designs/<id>/print.png"
 */
export async function uploadBuffer(
  key: string,
  _body: Buffer | Uint8Array,
  _contentType = "image/png",
): Promise<UploadResult> {
  if (!isR2Enabled()) {
    return {
      url: `${env.appUrl}/mock-storage/${key}`,
      key,
      mock: true,
    };
  }

  // TODO: wire @aws-sdk/client-s3 against the R2 endpoint:
  // const client = new S3Client({
  //   region: "auto",
  //   endpoint: `https://${env.r2.accountId}.r2.cloudflarestorage.com`,
  //   credentials: { accessKeyId: env.r2.accessKeyId, secretAccessKey: env.r2.secretAccessKey },
  // });
  // await client.send(new PutObjectCommand({ Bucket: env.r2.bucket, Key: key, Body: _body, ContentType: _contentType }));
  throw new Error("R2 upload not implemented yet.");
}

/** Build the public URL for a stored key. */
export function publicUrl(key: string): string {
  if (!isR2Enabled()) return `${env.appUrl}/mock-storage/${key}`;
  return `${env.r2.publicUrl}/${key}`;
}
