import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted!");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  // https://wonozzbgygpirndokbog.supabase.co/storage/v1/object/public/cabin_images/cabin-001.jpg

  console.log(newCabin, id);
  // has image
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imapePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin_images/${imageName}`;

  //query
  let query = supabase.from("cabins");

  // create cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imapePath }]);
  }
  // edit cabin
  if (id) {
    query = query.update({ ...newCabin, image: imapePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created!");
  }
  // upload cabin image
  const { error: starageError } = await supabase.storage
    .from("cabin_images")
    .upload(imageName, newCabin.image);

  // delete the cabin if there is an error uploading an image
  if (starageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(starageError);
    throw new Error(
      "Cabins image could not be uploaded and the cabin was not created!"
    );
  }
  return data;
}
