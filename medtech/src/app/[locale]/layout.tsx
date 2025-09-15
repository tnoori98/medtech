import IntlProvider from "@/i18n/IntlProvider";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "ar" }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dir = params.locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={params.locale} dir={dir}>
      <body>
        <Loader locale={params.locale}>{children}</Loader>
      </body>
    </html>
  );
}

// This stays on server and is safe to use async
async function Loader({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
