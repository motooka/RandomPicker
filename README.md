# RandomPicker
くじ引きツール、という名のVueJSアプリケーションの習作。
`localStorage` に依存しているので `file://` なURLでは動作しない。

公開場所（GitHub Pages） : [https://motooka.github.io/RandomPicker/](https://motooka.github.io/RandomPicker/)

## 主な依存物
- NodeJS 14.17.2
- VueJS 3.1.1
	- [ドキュメント](https://v3.ja.vuejs.org/guide/introduction.html)
	- [3.1.1 リリースノート](https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md#311-2021-06-07)
	- CDN経由でJSファイルの配信を受けている
- [Webpack](https://webpack.js.org/) : ビルド時にお世話になってる
- Docker （ローカル開発環境のみの依存)
	- nginxを起動してるだけ。
	- 宗教上またはその他の理由によりDockerを使えない場合は、HTTP Server を適当に立てましょう。

## ローカル開発環境の開始と終了
ポート番号20080の場合
```
docker run --rm --name random-picker -p 20080:80 -v $(pwd):/usr/share/nginx/html:ro -d nginx

docker stop random-picker
```
起動したら http://localhost:20080/ でアクセス！

## ライセンス
MIT License
see [LICENSE](./LICENSE) for more details.
