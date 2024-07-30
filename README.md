# Misskey Icon Changer

Misskeyのアイコンを毎日変更するやつ

## 使い方

### デプロイ

リポジトリをフォークしてDeno Deployにデプロイ

### 環境変数の設定

Deno Deployにて以下の環境変数を設定

イタリックはオプション

- `MISSKEY_ORIGIN`
  - MisskeyのベースURL
  - 例: `https://submarin.online`
- `MISSKEY_TOKEN`
  - MisskeyのAPIトークン
- *`ICON_IMAGES_FOLDER`*
  - アイコン画像を入れておくフォルダ名
  - 変数を設定しない場合: `misskey_icon_changer`
  - この名前のフォルダが見つからない，または2個以上見つかった場合はログにエラーが出力

### 画像の用意

上で設定した名前のフォルダに画像をアップロード
