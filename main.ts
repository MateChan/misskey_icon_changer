import { api } from "npm:misskey-js";

const {
  MISSKEY_ORIGIN,
  MISSKEY_TOKEN,
  ICON_IMAGES_FOLDER = "misskey_icon_changer",
} = Deno.env.toObject();

const mk = new api.APIClient({
  origin: MISSKEY_ORIGIN,
  credential: MISSKEY_TOKEN,
});

async function task() {
  const iconImageFolder = await mk.request("drive/folders/find", {
    name: ICON_IMAGES_FOLDER,
  });

  if (iconImageFolder.length !== 1) {
    console.log(
      `"${ICON_IMAGES_FOLDER}" フォルダが${
        iconImageFolder.length > 1
          ? "2個以上見つかりました"
          : "見つかりませんでした"
      }`,
    );
    return;
  }

  const files = await mk.request("drive/files", {
    folderId: iconImageFolder[0].id,
    limit: 100,
    sort: "-name",
  });
  const images = files.filter((file) => file.type.includes("image/"));
  const idx = Math.floor(Date.now() / 1000 / 60 / 60 / 24) % images.length;
  console.log(images);

  mk.request("i/update", { avatarId: images[idx].id });
}

Deno.cron("change icon", "0 0 * * *", task);
