import React, { useState } from 'react';

// styles && icons
import styles from './Changelog.module.css';
import { BsPlayCircleFill } from 'react-icons/bs';
import { BsXCircleFill } from 'react-icons/bs';

export const Changelog = ({ logs }) => {
  const [showFullActivity, setShowFullActivity] = useState(false);

  // comment 4 and above not shown in log preview
  const moreComments = () => {
    // selecting the comments that's hidden
    let result = logs
      .slice(3)
      .reduce((acc, o) => ((acc[o.name] = (acc[o.name] || 0) + 1), acc), {});
    // return if there is above 4 comments
    if (logs.length > 3) {
      return (
        <span>
          +{logs.length - 3} more comments from{' '}
          {Object.keys(result)[0].substring(
            0,
            Object.keys(result)[0].indexOf(' ')
          )}
          {Object.keys(result).length == 2 ? ' and' : ''}
          {Object.keys(result).length > 2 ? ',' : ''}{' '}
          {Object.keys(result).length > 1
            ? Object.keys(result)[1].substring(
                0,
                Object.keys(result)[1].indexOf(' ')
              )
            : ''}{' '}
          {Object.keys(result).length < 3
            ? ''
            : 'and ' + (Object.keys(result).length - 2) + ' others'}
        </span>
      );
    }
  };

  console.log(showFullActivity);
  return (
    <div className={styles.changelog}>
      {/* Render list of the 3 first changelogs */}
      {logs &&
        !showFullActivity &&
        logs.slice(0, 3).map((logs) => (
          <p key={logs.id}>
            <span className={styles.name}>{logs.name}</span>:{' '}
            {logs.message.length > 80
              ? `${logs.message.substring(0, 80)}...`
              : logs.message}
          </p>
        ))}
      {/* Render full list of changelogs */}
      {logs &&
        showFullActivity &&
        logs.map((logs) => (
          <p key={logs.id}>
            <span className={styles.name}>{logs.name}</span>: {logs.message}
          </p>
        ))}
      <div className={styles.additional}>
        {/* Info about additional comments  */}
        {!showFullActivity && moreComments()}
        {/* Buttons to show or hide full activity  */}
        {!showFullActivity && (
          <span
            className={styles.fullActivity}
            onClick={() => setShowFullActivity(true)}
          >
            View full activity log{' '}
            <BsPlayCircleFill className={styles.viewIcon} />
          </span>
        )}
        {showFullActivity && (
          <span
            className={styles.fullActivity}
            onClick={() => setShowFullActivity(false)}
          >
            Hide full activity log <BsXCircleFill className={styles.viewIcon} />
          </span>
        )}
      </div>
    </div>
  );
};
