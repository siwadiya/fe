// 匹配出 时间和内容
const str =
  '[00:00.000] 作词 : 李荣浩\n[00:01.000] 作曲 : 李荣浩\n[00:02.000] 编曲 : 李荣浩\n[00:03.000]\n[00:29.799] 电视一直闪\n[00:33.441] 联络方式都还没删\n[00:37.146] 你待我的好\n[00:40.752] 我却错手毁掉\n[00:44.392] 也曾一起想\n[00:48.023] 有个地方睡觉吃饭\n[00:51.674] 可怎么去熬 日夜颠倒\n[00:55.063] 连头款也凑不到\n[00:59.193] 墙板 被我砸烂\n[01:02.574] 到现在还没修\n[01:05.937] 一碗热的粥\n[01:07.960] 你怕我没够\n[01:09.829] 都留一半带走\n[01:12.809] 给你形容\n[01:15.276] 美好今后 你常常眼睛会红\n[01:20.501] 原来心疼我\n[01:22.517] 我那时候不懂\n[01:27.316] 假如我年少有为 不自卑\n[01:31.632] 懂得什么是珍贵\n[01:34.174] 那些美梦\n[01:37.783] 没给你 我一生有愧\n[01:41.863] 假如我年少有为 知进退\n[01:46.204] 才不会让你替我受罪\n[01:50.032] 婚礼上 多喝几杯\n[01:53.263] 和你现在那位\n[02:00.430]\n[02:26.175] 也曾一起想\n[02:29.798] 有个地方睡觉吃饭\n[02:33.428] 可怎么去熬 日夜颠倒\n[02:36.812] 连头款也凑不到\n[02:40.958] 墙板 被我砸烂\n[02:44.360] 到现在还没修\n[02:47.730] 一碗热的粥\n[02:49.757] 你怕我没够\n[02:51.589] 都留一半带走\n[02:54.622] 给你形容\n[02:57.078] 美好今后 你常常眼睛会红\n[03:02.280] 原来心疼我\n[03:04.333] 我那时候不懂\n[03:09.108] 假如我年少有为 不自卑\n[03:13.464] 懂得什么是珍贵\n[03:15.936] 那些美梦\n[03:19.553] 没给你 我一生有愧\n[03:23.677] 假如我年少有为 知进退\n[03:27.974] 才不会让你替我受罪\n[03:31.834] 婚礼上 多喝几杯\n[03:35.007] 和你现在那位\n[03:41.862] 假如我年少有为 不自卑\n[03:46.181] 尝过后悔的滋味\n[03:48.651] 金钱地位\n[03:52.300] 搏到了却好想退回\n[03:56.399] 假如我年少有为 知进退\n[04:00.701] 才不会让你替我受罪\n[04:04.629] 婚礼上 多喝几杯\n[04:07.732] 和你现在那位\n[04:15.261] 在婚礼上 多喝几杯\n[04:18.755] 祝我年少有为\n[04:27.855]\n[04:29.000] 制作人：李荣浩\n[04:29.500] 吉他：李荣浩\n[04:30.000] 贝斯：李荣浩\n[04:30.500] 鼓：Alex\n[04:31.000] 和声编写：李荣浩\n[04:31.500] 和声：李荣浩\n[04:32.000] 弦乐编写：李荣浩\n[04:32.500] 弦乐：国际首席爱乐乐团\n[04:33.000] 录音师：李荣浩\n[04:33.500] 混音师：李荣浩\n[04:34.000] 录音室：北京一样音乐录音室\n[04:34.500] 混音室：北京一样音乐录音室\n[04:35.000] 母带后期制作人：李荣浩\n[04:35.500] 母带后期处理工程师：周天澈TC Z.\n[04:36.000] 母带后期处理录音室：TC Faders\n[04:37.000]OP：一样音乐工作室\n[04:38.000]SP：酷亚音乐 (深圳) 有限公司 admin by One Asia Music Inc. 酷亚音乐股份有限公司\n'

const res1 = str.match(/\[.+?\]/g) // 匹配时间
// const res2 = str.match(/\D*(?=\)/g)
const res2 = str.match(/(\[(.+?)\])((?:\])?.*?\n)/g) // 匹配时间和歌词
const res3 = str.match(/(?<=\]).*?\n/g) // 匹配歌词

// console.log(res1)
console.log(res3)
