import Head from 'next/head';
import styles from './style.module.scss';
import JobCardContainer from "../containers/JobCardContainer";
import CategoryFilterContainer from "../containers/CategoryFilterContainer";
import {useAppContext} from "../context/AppContext";
import cn from "classnames";

export default function Home() {
  const [state, _] = useAppContext();

  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0"
          />

          <title>{process.env.NEXT_PUBLIC_TITLE}</title>
          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta property="og:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta property="og:type"
                content="website"
          />
          <meta property="og:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta property="og:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta property="og:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />

          <meta name="twitter:card"
                content="summary_large_image"
          />
          <meta property="twitter:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta name="twitter:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta name="twitter:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta name="twitter:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        </Head>

        <main className={cn(styles.main, {
          [styles.filter]: state.filter.length > 0,
        })}>
          <h1 className={styles.hidden}>
            Job Listing with Filter
          </h1>
          <div className={styles.container}>
            {state.filter.length > 0 && (
                <div className={styles.categoryFilterContainer}>
                  <CategoryFilterContainer/>
                </div>
            )}
            <JobCardContainer/>
          </div>
        </main>
      </>
  );
}
