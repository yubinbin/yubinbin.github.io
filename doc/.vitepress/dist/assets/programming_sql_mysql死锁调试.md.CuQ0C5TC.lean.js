import{_ as a,c as t,a2 as s,o as n}from"./chunks/framework.CqbvlPrP.js";const h=JSON.parse('{"title":"=====================================2024-04-12 14:00:46 382c INNODB MONITOR OUTPUT","description":"","frontmatter":{},"headers":[],"relativePath":"programming/sql/mysql死锁调试.md","filePath":"programming/sql/mysql死锁调试.md"}'),r={name:"programming/sql/mysql死锁调试.md"};function o(i,e,d,l,u,c){return n(),t("div",null,e[0]||(e[0]=[s(`<ol><li>使用命令 show engine innodb status 查看最近的一次死锁。</li></ol><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show engine innodb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">status</span></span></code></pre></div><h1 id="_2024-04-12-14-00-46-382c-innodb-monitor-output" tabindex="-1">===================================== 2024-04-12 14:00:46 382c INNODB MONITOR OUTPUT <a class="header-anchor" href="#_2024-04-12-14-00-46-382c-innodb-monitor-output" aria-label="Permalink to &quot;=====================================
2024-04-12 14:00:46 382c INNODB MONITOR OUTPUT&quot;">​</a></h1><h2 id="per-second-averages-calculated-from-the-last-10-seconds" tabindex="-1">Per second averages calculated from the last 10 seconds <a class="header-anchor" href="#per-second-averages-calculated-from-the-last-10-seconds" aria-label="Permalink to &quot;Per second averages calculated from the last 10 seconds&quot;">​</a></h2><h2 id="background-thread" tabindex="-1">BACKGROUND THREAD <a class="header-anchor" href="#background-thread" aria-label="Permalink to &quot;BACKGROUND THREAD&quot;">​</a></h2><h2 id="srv-master-thread-loops-18639-srv-active-0-srv-shutdown-2574002-srv-idlesrv-master-thread-log-flush-and-writes-2592592" tabindex="-1">srv_master_thread loops: 18639 srv_active, 0 srv_shutdown, 2574002 srv_idle srv_master_thread log flush and writes: 2592592 <a class="header-anchor" href="#srv-master-thread-loops-18639-srv-active-0-srv-shutdown-2574002-srv-idlesrv-master-thread-log-flush-and-writes-2592592" aria-label="Permalink to &quot;srv_master_thread loops: 18639 srv_active, 0 srv_shutdown, 2574002 srv_idle
srv_master_thread log flush and writes: 2592592&quot;">​</a></h2><h2 id="semaphores" tabindex="-1">SEMAPHORES <a class="header-anchor" href="#semaphores" aria-label="Permalink to &quot;SEMAPHORES&quot;">​</a></h2><h2 id="os-wait-array-info-reservation-count-40344os-wait-array-info-signal-count-49358mutex-spin-waits-122868-rounds-1146742-os-waits-36012rw-shared-spins-9138-rounds-127388-os-waits-4035rw-excl-spins-6221-rounds-29397-os-waits-265spin-rounds-per-wait-9-33-mutex-13-94-rw-shared-4-73-rw-excl" tabindex="-1">OS WAIT ARRAY INFO: reservation count 40344 OS WAIT ARRAY INFO: signal count 49358 Mutex spin waits 122868, rounds 1146742, OS waits 36012 RW-shared spins 9138, rounds 127388, OS waits 4035 RW-excl spins 6221, rounds 29397, OS waits 265 Spin rounds per wait: 9.33 mutex, 13.94 RW-shared, 4.73 RW-excl <a class="header-anchor" href="#os-wait-array-info-reservation-count-40344os-wait-array-info-signal-count-49358mutex-spin-waits-122868-rounds-1146742-os-waits-36012rw-shared-spins-9138-rounds-127388-os-waits-4035rw-excl-spins-6221-rounds-29397-os-waits-265spin-rounds-per-wait-9-33-mutex-13-94-rw-shared-4-73-rw-excl" aria-label="Permalink to &quot;OS WAIT ARRAY INFO: reservation count 40344
OS WAIT ARRAY INFO: signal count 49358
Mutex spin waits 122868, rounds 1146742, OS waits 36012
RW-shared spins 9138, rounds 127388, OS waits 4035
RW-excl spins 6221, rounds 29397, OS waits 265
Spin rounds per wait: 9.33 mutex, 13.94 RW-shared, 4.73 RW-excl&quot;">​</a></h2><h2 id="latest-detected-deadlock" tabindex="-1">LATEST DETECTED DEADLOCK <a class="header-anchor" href="#latest-detected-deadlock" aria-label="Permalink to &quot;LATEST DETECTED DEADLOCK&quot;">​</a></h2><p>2024-04-12 13:51:40 2b9c *** (1) TRANSACTION: TRANSACTION 1580598794, ACTIVE 1 sec starting index read mysql tables in use 1, locked 1 LOCK WAIT 2 lock struct(s), heap size 360, 1 row lock(s) MySQL thread id 2234, OS thread handle 0x382c, query id 232657 act134.act.xian.cn 192.168.11.134 root updating UPDATE element SET # uuid<br> parentId = -1 , userOID = NULL , workId = 3725 , # pageId componentId = 213 , component = &#39;custom_component_1669602785011&#39; , label = &#39;设备参数文本-gt06&#39; , description = &#39;%E8%AE%BE%E5%A4%87%E5%8F%82%E6%95%B0%E6%96%87%E6%9C%AC&#39; , style = &#39;%7B%22left%22%3A%22296.61374773297996px%22%2C%22top%22%3A%2230.000000000000014px%22%2C%22rotate%22%3A%220%22%2C%22opacity%22%3A1%2C%22width%22%3A%22260px%22%2C%22height%22%3A%2236px%22%2C%22transform%22%3A%22rotate(0deg)%22%7D&#39; , propValue = &#39;%7B%22attribute%22%3A%7B%22bgColor%22%3A%22%23FFFFFF%22%2C%22borderWidth%22%3A%220%22%2C%22borderColor%22%3A%22%23333333%22%2C%22borderRadius%22%3A%222%22%2C%22showTitle%22%3A%7B%22paramName%22%3A%22%E8%AE%A1%E6%95%B01%22%2C%22width%22%3A%2280%22%2C%22color%22%3A%22%23409EFF%22%2C%22fontSize%22%3A%2214%22%2C%22fontWeight%22%3A%22bold%22%2C *** (1) WAITING FOR THIS LOCK TO BE GRANTED: RECORD LOCKS space id 24285 page no 6897 n bits 72 index <code>PRIMARY</code> of table <code>tmiot_uistudio</code>.<code>element</code> trx id 1580598794 lock_mode X locks rec but not gap waiting *** (2) TRANSACTION: TRANSACTION 1580598789, ACTIVE 1 sec fetching rows mysql tables in use 4, locked 4 21919 lock struct(s), heap size 1947176, 114259 row lock(s) MySQL thread id 2231, OS thread handle 0x2b9c, query id 232654 act134.act.xian.cn 192.168.11.134 root Sending data DELETE FROM element WHERE id in (</p><pre><code>			SELECT id FROM (
				( 
					SELECT 
						a3.id 
					FROM 
					( 
						SELECT 
							@ids AS p_ids, 
							(
								SELECT @ids := GROUP_CONCAT(id) 
								FROM element AS a1  
								WHERE FIND_IN_SET( parentId, @ids )
							) AS c_ids 
						FROM 
						element AS a2, 
							( SELECT @ids := &#39;61049&#39; ) b  
						WHERE @ids IS NOT NULL
					) u
					JOIN element a3 ON FIND_IN_SET(a3.id, u.p_ids)
				) AS T 
			)
		 
			)
</code></pre><h2 id="_2-holds-the-lock-s-record-locks-space-id-24285-page-no-6897-n-bits-72-index-primary-of-table-tmiot-uistudio-element-trx-id-1580598789-lock-mode-s-2-waiting-for-this-lock-to-be-granted-record-locks-space-id-24285-page-no-6897-n-bits-72-index-primary-of-table-tmiot-uistudio-element-trx-id-1580598789-lock-mode-x-waiting-we-roll-back-transaction-1" tabindex="-1">*** (2) HOLDS THE LOCK(S): RECORD LOCKS space id 24285 page no 6897 n bits 72 index <code>PRIMARY</code> of table <code>tmiot_uistudio</code>.<code>element</code> trx id 1580598789 lock mode S *** (2) WAITING FOR THIS LOCK TO BE GRANTED: RECORD LOCKS space id 24285 page no 6897 n bits 72 index <code>PRIMARY</code> of table <code>tmiot_uistudio</code>.<code>element</code> trx id 1580598789 lock_mode X waiting *** WE ROLL BACK TRANSACTION (1) <a class="header-anchor" href="#_2-holds-the-lock-s-record-locks-space-id-24285-page-no-6897-n-bits-72-index-primary-of-table-tmiot-uistudio-element-trx-id-1580598789-lock-mode-s-2-waiting-for-this-lock-to-be-granted-record-locks-space-id-24285-page-no-6897-n-bits-72-index-primary-of-table-tmiot-uistudio-element-trx-id-1580598789-lock-mode-x-waiting-we-roll-back-transaction-1" aria-label="Permalink to &quot;*** (2) HOLDS THE LOCK(S):
RECORD LOCKS space id 24285 page no 6897 n bits 72 index \`PRIMARY\` of table \`tmiot_uistudio\`.\`element\` trx id 1580598789 lock mode S
*** (2) WAITING FOR THIS LOCK TO BE GRANTED:
RECORD LOCKS space id 24285 page no 6897 n bits 72 index \`PRIMARY\` of table \`tmiot_uistudio\`.\`element\` trx id 1580598789 lock_mode X waiting
*** WE ROLL BACK TRANSACTION (1)&quot;">​</a></h2><h2 id="transactions" tabindex="-1">TRANSACTIONS <a class="header-anchor" href="#transactions" aria-label="Permalink to &quot;TRANSACTIONS&quot;">​</a></h2><h2 id="trx-id-counter-1580598808purge-done-for-trx-s-n-o-1580598808-undo-n-o-0-state-running-but-idlehistory-list-length-2919list-of-transactions-for-each-session-transaction-1580598806-not-startedmysql-thread-id-2234-os-thread-handle-0x382c-query-id-232663-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598774-not-startedmysql-thread-id-2233-os-thread-handle-0x3fb8-query-id-232642-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598773-not-startedmysql-thread-id-2232-os-thread-handle-0x382c-query-id-232641-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598789-not-startedmysql-thread-id-2231-os-thread-handle-0x2b9c-query-id-232654-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598775-not-startedmysql-thread-id-2230-os-thread-handle-0x2b9c-query-id-232643-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598779-not-startedmysql-thread-id-2225-os-thread-handle-0x3fb8-query-id-232648-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580590905-not-startedmysql-thread-id-1992-os-thread-handle-0x382c-query-id-232664-act134-act-xian-cn-192-168-11-134-root-initshow-engine-innodb-status" tabindex="-1">Trx id counter 1580598808 Purge done for trx&#39;s n:o &lt; 1580598808 undo n:o &lt; 0 state: running but idle History list length 2919 LIST OF TRANSACTIONS FOR EACH SESSION: ---TRANSACTION 1580598806, not started MySQL thread id 2234, OS thread handle 0x382c, query id 232663 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598774, not started MySQL thread id 2233, OS thread handle 0x3fb8, query id 232642 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598773, not started MySQL thread id 2232, OS thread handle 0x382c, query id 232641 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598789, not started MySQL thread id 2231, OS thread handle 0x2b9c, query id 232654 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598775, not started MySQL thread id 2230, OS thread handle 0x2b9c, query id 232643 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598779, not started MySQL thread id 2225, OS thread handle 0x3fb8, query id 232648 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580590905, not started MySQL thread id 1992, OS thread handle 0x382c, query id 232664 act134.act.xian.cn 192.168.11.134 root init show engine innodb status <a class="header-anchor" href="#trx-id-counter-1580598808purge-done-for-trx-s-n-o-1580598808-undo-n-o-0-state-running-but-idlehistory-list-length-2919list-of-transactions-for-each-session-transaction-1580598806-not-startedmysql-thread-id-2234-os-thread-handle-0x382c-query-id-232663-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598774-not-startedmysql-thread-id-2233-os-thread-handle-0x3fb8-query-id-232642-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598773-not-startedmysql-thread-id-2232-os-thread-handle-0x382c-query-id-232641-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598789-not-startedmysql-thread-id-2231-os-thread-handle-0x2b9c-query-id-232654-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598775-not-startedmysql-thread-id-2230-os-thread-handle-0x2b9c-query-id-232643-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598779-not-startedmysql-thread-id-2225-os-thread-handle-0x3fb8-query-id-232648-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580590905-not-startedmysql-thread-id-1992-os-thread-handle-0x382c-query-id-232664-act134-act-xian-cn-192-168-11-134-root-initshow-engine-innodb-status" aria-label="Permalink to &quot;Trx id counter 1580598808
Purge done for trx&#39;s n:o &lt; 1580598808 undo n:o &lt; 0 state: running but idle
History list length 2919
LIST OF TRANSACTIONS FOR EACH SESSION:
---TRANSACTION 1580598806, not started
MySQL thread id 2234, OS thread handle 0x382c, query id 232663 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598774, not started
MySQL thread id 2233, OS thread handle 0x3fb8, query id 232642 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598773, not started
MySQL thread id 2232, OS thread handle 0x382c, query id 232641 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598789, not started
MySQL thread id 2231, OS thread handle 0x2b9c, query id 232654 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598775, not started
MySQL thread id 2230, OS thread handle 0x2b9c, query id 232643 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598779, not started
MySQL thread id 2225, OS thread handle 0x3fb8, query id 232648 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580590905, not started
MySQL thread id 1992, OS thread handle 0x382c, query id 232664 act134.act.xian.cn 192.168.11.134 root init
show engine innodb status&quot;">​</a></h2><h2 id="file-i-o" tabindex="-1">FILE I/O <a class="header-anchor" href="#file-i-o" aria-label="Permalink to &quot;FILE I/O&quot;">​</a></h2><h2 id="i-o-thread-0-state-native-aio-handle-insert-buffer-thread-i-o-thread-1-state-native-aio-handle-log-thread-i-o-thread-2-state-native-aio-handle-read-thread-i-o-thread-3-state-native-aio-handle-read-thread-i-o-thread-4-state-native-aio-handle-read-thread-i-o-thread-5-state-native-aio-handle-read-thread-i-o-thread-6-state-native-aio-handle-write-thread-i-o-thread-7-state-native-aio-handle-write-thread-i-o-thread-8-state-native-aio-handle-write-thread-i-o-thread-9-state-native-aio-handle-write-thread-pending-normal-aio-reads-0-0-0-0-0-aio-writes-0-0-0-0-0-ibuf-aio-reads-0-log-i-o-s-0-sync-i-o-s-0pending-flushes-fsync-log-0-buffer-pool-043712-os-file-reads-146856-os-file-writes-104920-os-fsyncs0-00-reads-s-0-avg-bytes-read-0-00-writes-s-0-00-fsyncs-s" tabindex="-1">I/O thread 0 state: native aio handle (insert buffer thread) I/O thread 1 state: native aio handle (log thread) I/O thread 2 state: native aio handle (read thread) I/O thread 3 state: native aio handle (read thread) I/O thread 4 state: native aio handle (read thread) I/O thread 5 state: native aio handle (read thread) I/O thread 6 state: native aio handle (write thread) I/O thread 7 state: native aio handle (write thread) I/O thread 8 state: native aio handle (write thread) I/O thread 9 state: native aio handle (write thread) Pending normal aio reads: 0 [0, 0, 0, 0] , aio writes: 0 [0, 0, 0, 0] , ibuf aio reads: 0, log i/o&#39;s: 0, sync i/o&#39;s: 0 Pending flushes (fsync) log: 0; buffer pool: 0 43712 OS file reads, 146856 OS file writes, 104920 OS fsyncs 0.00 reads/s, 0 avg bytes/read, 0.00 writes/s, 0.00 fsyncs/s <a class="header-anchor" href="#i-o-thread-0-state-native-aio-handle-insert-buffer-thread-i-o-thread-1-state-native-aio-handle-log-thread-i-o-thread-2-state-native-aio-handle-read-thread-i-o-thread-3-state-native-aio-handle-read-thread-i-o-thread-4-state-native-aio-handle-read-thread-i-o-thread-5-state-native-aio-handle-read-thread-i-o-thread-6-state-native-aio-handle-write-thread-i-o-thread-7-state-native-aio-handle-write-thread-i-o-thread-8-state-native-aio-handle-write-thread-i-o-thread-9-state-native-aio-handle-write-thread-pending-normal-aio-reads-0-0-0-0-0-aio-writes-0-0-0-0-0-ibuf-aio-reads-0-log-i-o-s-0-sync-i-o-s-0pending-flushes-fsync-log-0-buffer-pool-043712-os-file-reads-146856-os-file-writes-104920-os-fsyncs0-00-reads-s-0-avg-bytes-read-0-00-writes-s-0-00-fsyncs-s" aria-label="Permalink to &quot;I/O thread 0 state: native aio handle (insert buffer thread)
I/O thread 1 state: native aio handle (log thread)
I/O thread 2 state: native aio handle (read thread)
I/O thread 3 state: native aio handle (read thread)
I/O thread 4 state: native aio handle (read thread)
I/O thread 5 state: native aio handle (read thread)
I/O thread 6 state: native aio handle (write thread)
I/O thread 7 state: native aio handle (write thread)
I/O thread 8 state: native aio handle (write thread)
I/O thread 9 state: native aio handle (write thread)
Pending normal aio reads: 0 [0, 0, 0, 0] , aio writes: 0 [0, 0, 0, 0] ,
 ibuf aio reads: 0, log i/o&#39;s: 0, sync i/o&#39;s: 0
Pending flushes (fsync) log: 0; buffer pool: 0
43712 OS file reads, 146856 OS file writes, 104920 OS fsyncs
0.00 reads/s, 0 avg bytes/read, 0.00 writes/s, 0.00 fsyncs/s&quot;">​</a></h2><h2 id="insert-buffer-and-adaptive-hash-index" tabindex="-1">INSERT BUFFER AND ADAPTIVE HASH INDEX <a class="header-anchor" href="#insert-buffer-and-adaptive-hash-index" aria-label="Permalink to &quot;INSERT BUFFER AND ADAPTIVE HASH INDEX&quot;">​</a></h2><h2 id="ibuf-size-1-free-list-len-2901-seg-size-2903-4-mergesmerged-operations-insert-0-delete-mark-6-delete-0discarded-operations-insert-0-delete-mark-0-delete-00-00-hash-searches-s-0-00-non-hash-searches-s" tabindex="-1">Ibuf: size 1, free list len 2901, seg size 2903, 4 merges merged operations: insert 0, delete mark 6, delete 0 discarded operations: insert 0, delete mark 0, delete 0 0.00 hash searches/s, 0.00 non-hash searches/s <a class="header-anchor" href="#ibuf-size-1-free-list-len-2901-seg-size-2903-4-mergesmerged-operations-insert-0-delete-mark-6-delete-0discarded-operations-insert-0-delete-mark-0-delete-00-00-hash-searches-s-0-00-non-hash-searches-s" aria-label="Permalink to &quot;Ibuf: size 1, free list len 2901, seg size 2903, 4 merges
merged operations:
 insert 0, delete mark 6, delete 0
discarded operations:
 insert 0, delete mark 0, delete 0
0.00 hash searches/s, 0.00 non-hash searches/s&quot;">​</a></h2><h2 id="log" tabindex="-1">LOG <a class="header-anchor" href="#log" aria-label="Permalink to &quot;LOG&quot;">​</a></h2><h2 id="log-sequence-number-799584878168log-flushed-up-to-799584878168pages-flushed-up-to-799584878168last-checkpoint-at-799584878168max-checkpoint-age-84223550checkpoint-age-target-81591565modified-age-0checkpoint-age-00-pending-log-writes-0-pending-chkp-writes90444-log-i-o-s-done-0-00-log-i-o-s-second" tabindex="-1">Log sequence number 799584878168 Log flushed up to 799584878168 Pages flushed up to 799584878168 Last checkpoint at 799584878168 Max checkpoint age 84223550 Checkpoint age target 81591565 Modified age 0 Checkpoint age 0 0 pending log writes, 0 pending chkp writes 90444 log i/o&#39;s done, 0.00 log i/o&#39;s/second <a class="header-anchor" href="#log-sequence-number-799584878168log-flushed-up-to-799584878168pages-flushed-up-to-799584878168last-checkpoint-at-799584878168max-checkpoint-age-84223550checkpoint-age-target-81591565modified-age-0checkpoint-age-00-pending-log-writes-0-pending-chkp-writes90444-log-i-o-s-done-0-00-log-i-o-s-second" aria-label="Permalink to &quot;Log sequence number 799584878168
Log flushed up to   799584878168
Pages flushed up to 799584878168
Last checkpoint at  799584878168
Max checkpoint age    84223550
Checkpoint age target 81591565
Modified age          0
Checkpoint age        0
0 pending log writes, 0 pending chkp writes
90444 log i/o&#39;s done, 0.00 log i/o&#39;s/second&quot;">​</a></h2><h2 id="buffer-pool-and-memory" tabindex="-1">BUFFER POOL AND MEMORY <a class="header-anchor" href="#buffer-pool-and-memory" aria-label="Permalink to &quot;BUFFER POOL AND MEMORY&quot;">​</a></h2><h2 id="total-memory-allocated-8780644352-in-additional-pool-allocated-0total-memory-allocated-by-read-views-204512internal-hash-tables-constant-factor-variable-factor-adaptive-hash-index-160345216-151198744-9146472-page-hash-1182392-buffer-pool-0-only-dictionary-cache-77975610-75601072-2374538-file-system-3371344-812272-2559072-lock-system-21227168-21224648-2520-recovery-system-0-0-0-dictionary-memory-allocated-2374538buffer-pool-size-523640buffer-pool-size-bytes-8579317760free-buffers-479116database-pages-43966old-database-pages-16065modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-20466-not-young-210-00-youngs-s-0-00-non-youngs-spages-read-38218-created-6247-written-509960-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-43966-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0" tabindex="-1">Total memory allocated 8780644352; in additional pool allocated 0 Total memory allocated by read views 204512 Internal hash tables (constant factor + variable factor) Adaptive hash index 160345216 (151198744 + 9146472) Page hash 1182392 (buffer pool 0 only) Dictionary cache 77975610 (75601072 + 2374538) File system 3371344 (812272 + 2559072) Lock system 21227168 (21224648 + 2520) Recovery system 0 (0 + 0) Dictionary memory allocated 2374538 Buffer pool size 523640 Buffer pool size, bytes 8579317760 Free buffers 479116 Database pages 43966 Old database pages 16065 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 20466, not young 21 0.00 youngs/s, 0.00 non-youngs/s Pages read 38218, created 6247, written 50996 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 43966, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] <a class="header-anchor" href="#total-memory-allocated-8780644352-in-additional-pool-allocated-0total-memory-allocated-by-read-views-204512internal-hash-tables-constant-factor-variable-factor-adaptive-hash-index-160345216-151198744-9146472-page-hash-1182392-buffer-pool-0-only-dictionary-cache-77975610-75601072-2374538-file-system-3371344-812272-2559072-lock-system-21227168-21224648-2520-recovery-system-0-0-0-dictionary-memory-allocated-2374538buffer-pool-size-523640buffer-pool-size-bytes-8579317760free-buffers-479116database-pages-43966old-database-pages-16065modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-20466-not-young-210-00-youngs-s-0-00-non-youngs-spages-read-38218-created-6247-written-509960-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-43966-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0" aria-label="Permalink to &quot;Total memory allocated 8780644352; in additional pool allocated 0
Total memory allocated by read views 204512
Internal hash tables (constant factor + variable factor)
    Adaptive hash index 160345216 	(151198744 + 9146472)
    Page hash           1182392 (buffer pool 0 only)
    Dictionary cache    77975610 	(75601072 + 2374538)
    File system         3371344 	(812272 + 2559072)
    Lock system         21227168 	(21224648 + 2520)
    Recovery system     0 	(0 + 0)
Dictionary memory allocated 2374538
Buffer pool size        523640
Buffer pool size, bytes 8579317760
Free buffers            479116
Database pages          43966
Old database pages      16065
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 20466, not young 21
0.00 youngs/s, 0.00 non-youngs/s
Pages read 38218, created 6247, written 50996
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 43966, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]&quot;">​</a></h2><h2 id="individual-buffer-pool-info" tabindex="-1">INDIVIDUAL BUFFER POOL INFO <a class="header-anchor" href="#individual-buffer-pool-info" aria-label="Permalink to &quot;INDIVIDUAL BUFFER POOL INFO&quot;">​</a></h2><h2 id="buffer-pool-0buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-60000database-pages-5385old-database-pages-1967modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2749-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4630-created-808-written-64580-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5385-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-1buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59905database-pages-5479old-database-pages-2002modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2872-not-young-190-00-youngs-s-0-00-non-youngs-spages-read-4826-created-704-written-48270-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5479-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-2buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-60113database-pages-5271old-database-pages-1925modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2911-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4658-created-720-written-34380-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5271-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-3buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59763database-pages-5621old-database-pages-2054modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2185-not-young-10-00-youngs-s-0-00-non-youngs-spages-read-4894-created-790-written-107830-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5621-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-4buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59717database-pages-5668old-database-pages-2072modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-1044-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4917-created-803-written-104590-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5668-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-5buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59790database-pages-5596old-database-pages-2045modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2919-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4814-created-842-written-44660-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5596-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-6buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59876database-pages-5511old-database-pages-2014modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2949-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4805-created-766-written-51290-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5511-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-7buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59952database-pages-5435old-database-pages-1986modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2837-not-young-10-00-youngs-s-0-00-non-youngs-spages-read-4674-created-814-written-54360-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5435-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0" tabindex="-1">---BUFFER POOL 0 Buffer pool size 65455 Buffer pool size, bytes 1072414720 Free buffers 60000 Database pages 5385 Old database pages 1967 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 2749, not young 0 0.00 youngs/s, 0.00 non-youngs/s Pages read 4630, created 808, written 6458 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 5385, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] ---BUFFER POOL 1 Buffer pool size 65455 Buffer pool size, bytes 1072414720 Free buffers 59905 Database pages 5479 Old database pages 2002 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 2872, not young 19 0.00 youngs/s, 0.00 non-youngs/s Pages read 4826, created 704, written 4827 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 5479, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] ---BUFFER POOL 2 Buffer pool size 65455 Buffer pool size, bytes 1072414720 Free buffers 60113 Database pages 5271 Old database pages 1925 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 2911, not young 0 0.00 youngs/s, 0.00 non-youngs/s Pages read 4658, created 720, written 3438 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 5271, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] ---BUFFER POOL 3 Buffer pool size 65455 Buffer pool size, bytes 1072414720 Free buffers 59763 Database pages 5621 Old database pages 2054 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 2185, not young 1 0.00 youngs/s, 0.00 non-youngs/s Pages read 4894, created 790, written 10783 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 5621, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] ---BUFFER POOL 4 Buffer pool size 65455 Buffer pool size, bytes 1072414720 Free buffers 59717 Database pages 5668 Old database pages 2072 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 1044, not young 0 0.00 youngs/s, 0.00 non-youngs/s Pages read 4917, created 803, written 10459 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 5668, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] ---BUFFER POOL 5 Buffer pool size 65455 Buffer pool size, bytes 1072414720 Free buffers 59790 Database pages 5596 Old database pages 2045 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 2919, not young 0 0.00 youngs/s, 0.00 non-youngs/s Pages read 4814, created 842, written 4466 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 5596, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] ---BUFFER POOL 6 Buffer pool size 65455 Buffer pool size, bytes 1072414720 Free buffers 59876 Database pages 5511 Old database pages 2014 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 2949, not young 0 0.00 youngs/s, 0.00 non-youngs/s Pages read 4805, created 766, written 5129 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 5511, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] ---BUFFER POOL 7 Buffer pool size 65455 Buffer pool size, bytes 1072414720 Free buffers 59952 Database pages 5435 Old database pages 1986 Modified db pages 0 Pending reads 0 Pending writes: LRU 0, flush list 0, single page 0 Pages made young 2837, not young 1 0.00 youngs/s, 0.00 non-youngs/s Pages read 4674, created 814, written 5436 0.00 reads/s, 0.00 creates/s, 0.00 writes/s No buffer pool page gets since the last printout Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s LRU len: 5435, unzip_LRU len: 0 I/O sum[0]:cur[0], unzip sum[0]:cur[0] <a class="header-anchor" href="#buffer-pool-0buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-60000database-pages-5385old-database-pages-1967modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2749-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4630-created-808-written-64580-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5385-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-1buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59905database-pages-5479old-database-pages-2002modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2872-not-young-190-00-youngs-s-0-00-non-youngs-spages-read-4826-created-704-written-48270-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5479-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-2buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-60113database-pages-5271old-database-pages-1925modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2911-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4658-created-720-written-34380-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5271-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-3buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59763database-pages-5621old-database-pages-2054modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2185-not-young-10-00-youngs-s-0-00-non-youngs-spages-read-4894-created-790-written-107830-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5621-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-4buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59717database-pages-5668old-database-pages-2072modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-1044-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4917-created-803-written-104590-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5668-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-5buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59790database-pages-5596old-database-pages-2045modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2919-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4814-created-842-written-44660-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5596-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-6buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59876database-pages-5511old-database-pages-2014modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2949-not-young-00-00-youngs-s-0-00-non-youngs-spages-read-4805-created-766-written-51290-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5511-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0-buffer-pool-7buffer-pool-size-65455buffer-pool-size-bytes-1072414720free-buffers-59952database-pages-5435old-database-pages-1986modified-db-pages-0pending-reads-0pending-writes-lru-0-flush-list-0-single-page-0pages-made-young-2837-not-young-10-00-youngs-s-0-00-non-youngs-spages-read-4674-created-814-written-54360-00-reads-s-0-00-creates-s-0-00-writes-sno-buffer-pool-page-gets-since-the-last-printoutpages-read-ahead-0-00-s-evicted-without-access-0-00-s-random-read-ahead-0-00-slru-len-5435-unzip-lru-len-0i-o-sum-0-cur-0-unzip-sum-0-cur-0" aria-label="Permalink to &quot;---BUFFER POOL 0
Buffer pool size        65455
Buffer pool size, bytes 1072414720
Free buffers            60000
Database pages          5385
Old database pages      1967
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 2749, not young 0
0.00 youngs/s, 0.00 non-youngs/s
Pages read 4630, created 808, written 6458
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 5385, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
---BUFFER POOL 1
Buffer pool size        65455
Buffer pool size, bytes 1072414720
Free buffers            59905
Database pages          5479
Old database pages      2002
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 2872, not young 19
0.00 youngs/s, 0.00 non-youngs/s
Pages read 4826, created 704, written 4827
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 5479, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
---BUFFER POOL 2
Buffer pool size        65455
Buffer pool size, bytes 1072414720
Free buffers            60113
Database pages          5271
Old database pages      1925
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 2911, not young 0
0.00 youngs/s, 0.00 non-youngs/s
Pages read 4658, created 720, written 3438
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 5271, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
---BUFFER POOL 3
Buffer pool size        65455
Buffer pool size, bytes 1072414720
Free buffers            59763
Database pages          5621
Old database pages      2054
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 2185, not young 1
0.00 youngs/s, 0.00 non-youngs/s
Pages read 4894, created 790, written 10783
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 5621, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
---BUFFER POOL 4
Buffer pool size        65455
Buffer pool size, bytes 1072414720
Free buffers            59717
Database pages          5668
Old database pages      2072
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 1044, not young 0
0.00 youngs/s, 0.00 non-youngs/s
Pages read 4917, created 803, written 10459
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 5668, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
---BUFFER POOL 5
Buffer pool size        65455
Buffer pool size, bytes 1072414720
Free buffers            59790
Database pages          5596
Old database pages      2045
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 2919, not young 0
0.00 youngs/s, 0.00 non-youngs/s
Pages read 4814, created 842, written 4466
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 5596, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
---BUFFER POOL 6
Buffer pool size        65455
Buffer pool size, bytes 1072414720
Free buffers            59876
Database pages          5511
Old database pages      2014
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 2949, not young 0
0.00 youngs/s, 0.00 non-youngs/s
Pages read 4805, created 766, written 5129
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 5511, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
---BUFFER POOL 7
Buffer pool size        65455
Buffer pool size, bytes 1072414720
Free buffers            59952
Database pages          5435
Old database pages      1986
Modified db pages       0
Pending reads 0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 2837, not young 1
0.00 youngs/s, 0.00 non-youngs/s
Pages read 4674, created 814, written 5436
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 5435, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]&quot;">​</a></h2><h2 id="row-operations" tabindex="-1">ROW OPERATIONS <a class="header-anchor" href="#row-operations" aria-label="Permalink to &quot;ROW OPERATIONS&quot;">​</a></h2><h2 id="_0-queries-inside-innodb-0-queries-in-queue0-read-views-open-inside-innodb0-rw-transactions-active-inside-innodb0-ro-transactions-active-inside-innodb0-out-of-1000-descriptors-usedmain-thread-id-4164-state-sleepingnumber-of-rows-inserted-621464-updated-27449-deleted-494-read-786749800-00-inserts-s-0-00-updates-s-0-00-deletes-s-0-00-reads-s" tabindex="-1">0 queries inside InnoDB, 0 queries in queue 0 read views open inside InnoDB 0 RW transactions active inside InnoDB 0 RO transactions active inside InnoDB 0 out of 1000 descriptors used Main thread id 4164, state: sleeping Number of rows inserted 621464, updated 27449, deleted 494, read 78674980 0.00 inserts/s, 0.00 updates/s, 0.00 deletes/s, 0.00 reads/s <a class="header-anchor" href="#_0-queries-inside-innodb-0-queries-in-queue0-read-views-open-inside-innodb0-rw-transactions-active-inside-innodb0-ro-transactions-active-inside-innodb0-out-of-1000-descriptors-usedmain-thread-id-4164-state-sleepingnumber-of-rows-inserted-621464-updated-27449-deleted-494-read-786749800-00-inserts-s-0-00-updates-s-0-00-deletes-s-0-00-reads-s" aria-label="Permalink to &quot;0 queries inside InnoDB, 0 queries in queue
0 read views open inside InnoDB
0 RW transactions active inside InnoDB
0 RO transactions active inside InnoDB
0 out of 1000 descriptors used
Main thread id 4164, state: sleeping
Number of rows inserted 621464, updated 27449, deleted 494, read 78674980
0.00 inserts/s, 0.00 updates/s, 0.00 deletes/s, 0.00 reads/s&quot;">​</a></h2><h2 id="latest-detected-deadlock-1" tabindex="-1">LATEST DETECTED DEADLOCK <a class="header-anchor" href="#latest-detected-deadlock-1" aria-label="Permalink to &quot;LATEST DETECTED DEADLOCK&quot;">​</a></h2><p>2024-04-12 13:51:40 2b9c *** (1) TRANSACTION: TRANSACTION 1580598794, ACTIVE 1 sec starting index read mysql tables in use 1, locked 1 LOCK WAIT 2 lock struct(s), heap size 360, 1 row lock(s) MySQL thread id 2234, OS thread handle 0x382c, query id 232657 act134.act.xian.cn 192.168.11.134 root updating UPDATE element SET # uuid<br> parentId = -1 , userOID = NULL , workId = 3725 , # pageId componentId = 213 , component = &#39;custom_component_1669602785011&#39; , label = &#39;设备参数文本-gt06&#39; , description = &#39;%E8%AE%BE%E5%A4%87%E5%8F%82%E6%95%B0%E6%96%87%E6%9C%AC&#39; , style = &#39;%7B%22left%22%3A%22296.61374773297996px%22%2C%22top%22%3A%2230.000000000000014px%22%2C%22rotate%22%3A%220%22%2C%22opacity%22%3A1%2C%22width%22%3A%22260px%22%2C%22height%22%3A%2236px%22%2C%22transform%22%3A%22rotate(0deg)%22%7D&#39; , propValue = &#39;%7B%22attribute%22%3A%7B%22bgColor%22%3A%22%23FFFFFF%22%2C%22borderWidth%22%3A%220%22%2C%22borderColor%22%3A%22%23333333%22%2C%22borderRadius%22%3A%222%22%2C%22showTitle%22%3A%7B%22paramName%22%3A%22%E8%AE%A1%E6%95%B01%22%2C%22width%22%3A%2280%22%2C%22color%22%3A%22%23409EFF%22%2C%22fontSize%22%3A%2214%22%2C%22fontWeight%22%3A%22bold%22%2C *** (1) WAITING FOR THIS LOCK TO BE GRANTED: RECORD LOCKS space id 24285 page no 6897 n bits 72 index <code>PRIMARY</code> of table <code>tmiot_uistudio</code>.<code>element</code> trx id 1580598794 lock_mode X locks rec but not gap waiting *** (2) TRANSACTION: TRANSACTION 1580598789, ACTIVE 1 sec fetching rows mysql tables in use 4, locked 4 21919 lock struct(s), heap size 1947176, 114259 row lock(s) MySQL thread id 2231, OS thread handle 0x2b9c, query id 232654 act134.act.xian.cn 192.168.11.134 root Sending data DELETE FROM element WHERE id in (</p><pre><code>			SELECT id FROM (
				( 
					SELECT 
						a3.id 
					FROM 
					( 
						SELECT 
							@ids AS p_ids, 
							(
								SELECT @ids := GROUP_CONCAT(id) 
								FROM element AS a1  
								WHERE FIND_IN_SET( parentId, @ids )
							) AS c_ids 
						FROM 
						element AS a2, 
							( SELECT @ids := &#39;61049&#39; ) b  
						WHERE @ids IS NOT NULL
					) u
					JOIN element a3 ON FIND_IN_SET(a3.id, u.p_ids)
				) AS T 
			)
		 
			)
</code></pre><h2 id="_2-holds-the-lock-s-record-locks-space-id-24285-page-no-6897-n-bits-72-index-primary-of-table-tmiot-uistudio-element-trx-id-1580598789-lock-mode-s-2-waiting-for-this-lock-to-be-granted-record-locks-space-id-24285-page-no-6897-n-bits-72-index-primary-of-table-tmiot-uistudio-element-trx-id-1580598789-lock-mode-x-waiting-we-roll-back-transaction-1-1" tabindex="-1">*** (2) HOLDS THE LOCK(S): RECORD LOCKS space id 24285 page no 6897 n bits 72 index <code>PRIMARY</code> of table <code>tmiot_uistudio</code>.<code>element</code> trx id 1580598789 lock mode S *** (2) WAITING FOR THIS LOCK TO BE GRANTED: RECORD LOCKS space id 24285 page no 6897 n bits 72 index <code>PRIMARY</code> of table <code>tmiot_uistudio</code>.<code>element</code> trx id 1580598789 lock_mode X waiting *** WE ROLL BACK TRANSACTION (1) <a class="header-anchor" href="#_2-holds-the-lock-s-record-locks-space-id-24285-page-no-6897-n-bits-72-index-primary-of-table-tmiot-uistudio-element-trx-id-1580598789-lock-mode-s-2-waiting-for-this-lock-to-be-granted-record-locks-space-id-24285-page-no-6897-n-bits-72-index-primary-of-table-tmiot-uistudio-element-trx-id-1580598789-lock-mode-x-waiting-we-roll-back-transaction-1-1" aria-label="Permalink to &quot;*** (2) HOLDS THE LOCK(S):
RECORD LOCKS space id 24285 page no 6897 n bits 72 index \`PRIMARY\` of table \`tmiot_uistudio\`.\`element\` trx id 1580598789 lock mode S
*** (2) WAITING FOR THIS LOCK TO BE GRANTED:
RECORD LOCKS space id 24285 page no 6897 n bits 72 index \`PRIMARY\` of table \`tmiot_uistudio\`.\`element\` trx id 1580598789 lock_mode X waiting
*** WE ROLL BACK TRANSACTION (1)&quot;">​</a></h2><h2 id="transactions-1" tabindex="-1">TRANSACTIONS <a class="header-anchor" href="#transactions-1" aria-label="Permalink to &quot;TRANSACTIONS&quot;">​</a></h2><h2 id="trx-id-counter-1580598808purge-done-for-trx-s-n-o-1580598808-undo-n-o-0-state-running-but-idlehistory-list-length-2919list-of-transactions-for-each-session-transaction-1580598806-not-startedmysql-thread-id-2234-os-thread-handle-0x382c-query-id-232663-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598774-not-startedmysql-thread-id-2233-os-thread-handle-0x3fb8-query-id-232642-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598773-not-startedmysql-thread-id-2232-os-thread-handle-0x382c-query-id-232641-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598789-not-startedmysql-thread-id-2231-os-thread-handle-0x2b9c-query-id-232654-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598775-not-startedmysql-thread-id-2230-os-thread-handle-0x2b9c-query-id-232643-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598779-not-startedmysql-thread-id-2225-os-thread-handle-0x3fb8-query-id-232648-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580590905-not-startedmysql-thread-id-1992-os-thread-handle-0x382c-query-id-232664-act134-act-xian-cn-192-168-11-134-root-initshow-engine-innodb-status-1" tabindex="-1">Trx id counter 1580598808 Purge done for trx&#39;s n:o &lt; 1580598808 undo n:o &lt; 0 state: running but idle History list length 2919 LIST OF TRANSACTIONS FOR EACH SESSION: ---TRANSACTION 1580598806, not started MySQL thread id 2234, OS thread handle 0x382c, query id 232663 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598774, not started MySQL thread id 2233, OS thread handle 0x3fb8, query id 232642 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598773, not started MySQL thread id 2232, OS thread handle 0x382c, query id 232641 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598789, not started MySQL thread id 2231, OS thread handle 0x2b9c, query id 232654 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598775, not started MySQL thread id 2230, OS thread handle 0x2b9c, query id 232643 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580598779, not started MySQL thread id 2225, OS thread handle 0x3fb8, query id 232648 act134.act.xian.cn 192.168.11.134 root cleaning up ---TRANSACTION 1580590905, not started MySQL thread id 1992, OS thread handle 0x382c, query id 232664 act134.act.xian.cn 192.168.11.134 root init show engine innodb status <a class="header-anchor" href="#trx-id-counter-1580598808purge-done-for-trx-s-n-o-1580598808-undo-n-o-0-state-running-but-idlehistory-list-length-2919list-of-transactions-for-each-session-transaction-1580598806-not-startedmysql-thread-id-2234-os-thread-handle-0x382c-query-id-232663-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598774-not-startedmysql-thread-id-2233-os-thread-handle-0x3fb8-query-id-232642-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598773-not-startedmysql-thread-id-2232-os-thread-handle-0x382c-query-id-232641-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598789-not-startedmysql-thread-id-2231-os-thread-handle-0x2b9c-query-id-232654-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598775-not-startedmysql-thread-id-2230-os-thread-handle-0x2b9c-query-id-232643-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580598779-not-startedmysql-thread-id-2225-os-thread-handle-0x3fb8-query-id-232648-act134-act-xian-cn-192-168-11-134-root-cleaning-up-transaction-1580590905-not-startedmysql-thread-id-1992-os-thread-handle-0x382c-query-id-232664-act134-act-xian-cn-192-168-11-134-root-initshow-engine-innodb-status-1" aria-label="Permalink to &quot;Trx id counter 1580598808
Purge done for trx&#39;s n:o &lt; 1580598808 undo n:o &lt; 0 state: running but idle
History list length 2919
LIST OF TRANSACTIONS FOR EACH SESSION:
---TRANSACTION 1580598806, not started
MySQL thread id 2234, OS thread handle 0x382c, query id 232663 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598774, not started
MySQL thread id 2233, OS thread handle 0x3fb8, query id 232642 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598773, not started
MySQL thread id 2232, OS thread handle 0x382c, query id 232641 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598789, not started
MySQL thread id 2231, OS thread handle 0x2b9c, query id 232654 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598775, not started
MySQL thread id 2230, OS thread handle 0x2b9c, query id 232643 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580598779, not started
MySQL thread id 2225, OS thread handle 0x3fb8, query id 232648 act134.act.xian.cn 192.168.11.134 root cleaning up
---TRANSACTION 1580590905, not started
MySQL thread id 1992, OS thread handle 0x382c, query id 232664 act134.act.xian.cn 192.168.11.134 root init
show engine innodb status&quot;">​</a></h2><h1 id="end-of-innodb-monitor-output" tabindex="-1">END OF INNODB MONITOR OUTPUT <a class="header-anchor" href="#end-of-innodb-monitor-output" aria-label="Permalink to &quot;END OF INNODB MONITOR OUTPUT&quot;">​</a></h1>`,33)]))}const p=a(r,[["render",o]]);export{h as __pageData,p as default};
