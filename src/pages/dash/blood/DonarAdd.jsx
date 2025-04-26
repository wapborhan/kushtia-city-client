import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import Select from "../../../components/ui/select";
import useBloodGroup from "../../../hooks/data/useBloodGroup";
import useUpazila from "../../../hooks/data/useUpazila";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DonarAdd = () => {
  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors },
  } = useForm();
  const [bloodGroups] = useBloodGroup();
  const [upazilas] = useUpazila();
  const [filteredUpazila, setFilteredUpazila] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setButtonDisabled(!event.target.checked);
  };

  useEffect(() => {
    const filteredUpazila =
      upazilas && upazilas.filter((upazila) => upazila?.district_id === "25");
    const transformed = filteredUpazila.map(
      ({ id, district_id, name, bn_name, url }) => ({
        id,
        district_id,
        url,
        label: bn_name,
        value: bn_name,
      })
    );
    setFilteredUpazila(transformed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (formData) => {
    const inputData = {
      ...formData,
      postedBy: "user",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    console.log(inputData);
    // axiosPublic.post("/api/endpoint", formData)
    //   .then(response => {
    //     console.log("Form submitted successfully:", response.data);
    //     reset(); // Reset the form after successful submission
    //   })
    //   .catch(error => {
    //     console.error("Error submitting form:", error);
    //   });
  };
  return (
    <main className="flex-grow mb-16 md:mb-0">
      <div className="min-h-screen bg-whites py-12 px-2  sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2 md:mb-8">
            রক্তদাতা নিবন্ধন ফরম
          </h2>

          <div className="mb-4">
            <div className="relative w-full overflow-hidden bg-background py-4 px-1 md:px-2 rounded-lg border shadow-sm">
              <div
                className="flex w-full overflow-hidden whitespace-nowrap relative"
                aria-hidden="true"
              >
                <div className="flex items-center whitespace-nowrap pr-8 animate-[marquee_15s_linear_infinite]">
                  <span className="flex items-center">
                    <span className="inline-block">ফর্ম পূরণ করার আগে</span>
                    <span className="mx-1"></span>
                  </span>
                  <span className="flex items-center">
                    <Link
                      target="_self"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      to="/awareness"
                    >
                      <span
                        className="font-bold inline-block"
                        // style="color: rgb(14, 165, 233);"
                      >
                        সচেতনতা
                      </span>
                    </Link>
                    <span className="mx-1"></span>
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block">এবং</span>
                    <span className="mx-1"></span>
                  </span>
                  <span className="flex items-center">
                    <a
                      target="_self"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      href="/faq"
                    >
                      <span
                        className="font-bold inline-block"
                        // style="color: rgb(139, 92, 246);"
                      >
                        প্রশ্নোত্তর
                      </span>
                    </a>
                    <span className="mx-1"></span>
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block">
                      গুলো পড়ে নিন লিখাগুলোর উপর ক্লিক করে এবং আরো অনেক
                      গুরুত্বপূর্ণ তথ্যের জন্য পেজ পেয়ে যাবেন হোম পেজের
                      অপরিহার্য সংস্থান বা resources সেকশনে এবং এই ওয়েবসাইট
                      ফোটারে। সেগুলো অবশ্যই পড়ে নিবেন প্রতারণা থেকে বাঁচতে এবং
                      সচেতন হতে।
                    </span>
                  </span>
                </div>
                <div
                  className="flex items-center whitespace-nowrap pr-8 animate-marquee-slow"
                  //   style="animation: 20s ease-in 0s 1 normal forwards running none, 30s linear 0s infinite normal none running marquee;"
                >
                  <span className="flex items-center">
                    <span className="inline-block">ফর্ম পূরণ করার আগে</span>
                    <span className="mx-1"></span>
                  </span>
                  <span className="flex items-center">
                    <a
                      target="_self"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      href="/awareness"
                    >
                      <span
                        className="font-bold inline-block"
                        // style="color: rgb(14, 165, 233);"
                      >
                        সচেতনতা
                      </span>
                    </a>
                    <span className="mx-1"></span>
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block">এবং</span>
                    <span className="mx-1"></span>
                  </span>
                  <span className="flex items-center">
                    <a
                      target="_self"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                      href="/faq"
                    >
                      <span
                        className="font-bold inline-block"
                        // style="color: rgb(139, 92, 246);"
                      >
                        প্রশ্নোত্তর
                      </span>
                    </a>
                    <span className="mx-1"></span>
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block">
                      গুলো পড়ে নিন লিখাগুলোর উপর ক্লিক করে এবং আরো অনেক
                      গুরুত্বপূর্ণ তথ্যের জন্য পেজ পেয়ে যাবেন হোম পেজের
                      অপরিহার্য সংস্থান বা resources সেকশনে এবং এই ওয়েবসাইট
                      ফোটারে। সেগুলো অবশ্যই পড়ে নিবেন প্রতারণা থেকে বাঁচতে এবং
                      সচেতন হতে।
                    </span>
                  </span>
                </div>
              </div>
              <span className="sr-only">
                ফর্ম পূরণ করার আগে সচেতনতা এবং প্রশ্নোত্তর গুলো পড়ে নিন
                লিখাগুলোর উপর ক্লিক করে এবং আরো অনেক গুরুত্বপূর্ণ তথ্যের জন্য
                পেজ পেয়ে যাবেন হোম পেজের অপরিহার্য সংস্থান বা resources সেকশনে
                এবং এই ওয়েবসাইট ফোটারে। সেগুলো অবশ্যই পড়ে নিবেন প্রতারণা থেকে
                বাঁচতে এবং সচেতন হতে।
              </span>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-5xl mx-auto pt-5">
            <div className="p-6 pt-0">
              <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      নাম
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="পুরো নাম লিখুন"
                      register={register}
                      errors={errors}
                      required={true}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      রক্তের গ্রুপ
                    </label>
                    <Select
                      options={bloodGroups}
                      control={control}
                      required={true}
                      errors={errors}
                      placeholder="রক্তের গ্রুপ"
                      name="bloodGroup"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      লিঙ্গ
                    </label>
                    <Select
                      options={[
                        { value: "male", label: "পুরুষ" },
                        { value: "female", label: "মহিলা" },
                        { value: "others", label: "অন্যান্য" },
                      ]}
                      control={control}
                      required={true}
                      placeholder="লিঙ্গ"
                      name="gender"
                    />
                  </div>

                  <div className="space-y-2 flex flex-col">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      শেষ রক্তদানের তারিখ
                    </label>
                    <input
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      max="2025-04-26"
                      id=":r9:-form-item"
                      aria-describedby=":r9:-form-item-description"
                      aria-invalid="false"
                      type="date"
                      value=""
                      name="lastDonationDate"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      উপজেলা
                    </label>
                    <Select
                      options={filteredUpazila ? filteredUpazila : []}
                      control={control}
                      required={true}
                      placeholder="উপজেলা"
                      name="upazila"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      ঠিকানা
                    </label>
                    <Input
                      type="text"
                      name="address"
                      placeholder="গ্রাম/রাস্তা নং, বাড়ি নং লিখুন"
                      register={register}
                      errors={errors}
                      required={true}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      ফোন নম্বর
                    </label>
                    <Input
                      type="text"
                      name="contactNumber"
                      placeholder="+880XXXXXXXXXX"
                      register={register}
                      errors={errors}
                      required={true}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      জরুরি যোগাযোগের ফোন
                    </label>
                    <Input
                      type="text"
                      name="emergencyContact"
                      placeholder="+880XXXXXXXXXX"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      ফেসবুক প্রোফাইল লিংক
                    </label>
                    <Input
                      type="text"
                      name="facebookLink"
                      placeholder="https://www.facebook.com/আপনার_ফেসবুক_ইউজারনেম"
                      register={register}
                      errors={errors}
                      required={true}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      হোয়াটসঅ্যাপ নম্বর
                    </label>
                    <Input
                      type="text"
                      name="whatsappNumber"
                      placeholder="+880XXXXXXXXXX"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    বিস্তারিত লিখুন
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                    placeholder="বিস্তারিত লিখুন"
                    {...register("notes")}
                    aria-invalid="false"
                  ></textarea>
                </div>
                <div className="flex items-start space-x-3 border rounded-md p-4 bg-background text-black">
                  <input
                    type="checkbox"
                    id="agreement"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 border border-slate-500 rounded-sm text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                  <label htmlFor="agreement" className="text-sm leading-none">
                    <span className="flex items-center gap-2">
                      <a className="text-primary underline" href="/awareness">
                        সচেতনতা
                      </a>
                      <span className="text-black">
                        গুলো পড়ে থাকলে সম্মত হন
                      </span>
                    </span>
                    <p className="text-xs text-muted-foreground">
                      এই বাক্সে টিক দিয়ে আপনি আমাদের সেবার শর্তাবলী এবং
                      গোপনীয়তা নীতিতে সম্মত হচ্ছেন
                    </p>
                  </label>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[var(--theme-color)] hover:bg-[var(--theme-color/15%)] focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800 rounded-lg cursor-pointer w-full sm text-black"
                  type="submit"
                  disabled={buttonDisabled}
                >
                  রক্তদাতা হিসেবে নিবন্ধন করুন
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonarAdd;
