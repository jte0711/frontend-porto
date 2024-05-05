"use client";
import CsSearchbar from "@component/CsSearchbar";
import CsBody from "@module/Body";
import Navbar from "@module/Navbar";
import { useGitHub } from "@request/useGitHub";
import { convertToJoinedAt } from "helpers/date";
import { useState } from "react";

/**
 * TODO:
 * - this is a version where using 'use client'
 * - make a version using react server component
 */

export default function Page(): JSX.Element {
  const [search, setSearch] = useState("");
  const [curUser, setCurUser] = useState("");

  const { data, isLoading, error } = useGitHub(curUser);

  const onSubmitHandler = () => {
    setCurUser(search);
  };

  return (
    <main className="w-full lg:w-[730px] flex flex-col justify-center items-center">
      <Navbar />
      <CsSearchbar
        containerClass="mt-9"
        searchValue={search}
        setSearchValue={setSearch}
        onSubmit={onSubmitHandler}
        showError={error ? true : false}
      />
      <CsBody
        login={isLoading ? "octocat" : data.login}
        name={isLoading ? "The Octocat" : data.name}
        bio={
          isLoading
            ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
            : data.bio
        }
        publicRepos={isLoading ? "8" : data.public_repos.toString()}
        followers={isLoading ? "3939" : data.followers?.toString()}
        following={isLoading ? "9" : data.following?.toString()}
        location={isLoading ? "San Fransisco" : data.location}
        blog={isLoading ? "https://github.blog" : data.blog}
        company={isLoading ? "@github" : data.company}
        twitterUsername={isLoading ? "" : data.twitter_username || ""}
        avatarUrl={isLoading ? "/octocat.png" : data.avatar_url}
        createdAt={
          isLoading
            ? "Joined at 15 Jul 2024"
            : convertToJoinedAt(data.created_at)
        }
      />
    </main>
  );
}
