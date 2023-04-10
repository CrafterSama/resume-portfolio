import { useEffect, useState } from 'react';
import Image from 'next/image';
import rocketSVG from '../../assets/images/rocket.svg';

import TopCloud from '../common/Clouds/TopCloud';
import { Profiles, SupabaseResponseProps } from 'src/types/modules';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Database } from 'src/types/supabase';
import { toast } from 'sonner';

const Hero = ({ session }) => {
  const user = useUser();
  const supabase = useSupabaseClient<Database>();
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profiles>(null);
  const [avatarUrl, setAvatarUrl] = useState<Profiles['avatar_url']>('');

  useEffect(() => {
    const headerBgOne = document.getElementById('bigHeaderOne');
    const headerBgTwo = document.getElementById('bigHeaderTwo');
    const timer = setTimeout(() => {
      headerBgOne?.classList.remove('fadeInRightLarge');
      headerBgTwo?.classList.remove('fadeInLeftLarge');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  async function getProfile() {
    try {
      setLoading(true);

      const { data, error, status }: SupabaseResponseProps = await supabase.from('profiles').select('*').single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setProfile(data);
      }
    } catch (error) {
      toast.error('Error loading the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getAvatarImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  useEffect(() => {
    getProfile();
  }, [session]);

  useEffect(() => {
    if (profile?.avatar_url) {
      getAvatarImage(profile?.avatar_url);
    }
  }, [profile?.avatar_url]);

  return (
    <header id="about-me" className="hero">
      <div id="bigHeaderOne" className="middle-bg-one animated fadeInRightLarge"></div>
      <div id="bigHeaderTwo" className="middle-bg-two animated fadeInLeftLarge"></div>
      <div className="header-body text-center">
        <figure className="about-picture animated fadeInUp delay-800ms w-64 h-64 rounded-full">
          <Image
            className="picture-profile w-64 h-64 rounded-full object-cover"
            src={avatarUrl}
            alt={`${profile?.name} ${profile?.last_name}`}
            width={250}
            height={250}
          />
        </figure>
        <h1 className="header-title animated fadeInUp delay-1s font-semibold text-3xl">{`${profile?.name} ${profile?.last_name}`}</h1>
        <div className="hero-body text-left">
          <div className="floating-description animated fadeInDown">
            <div className="subtitle-hero animated float slow-motion">
              <h2 className="subtitle animated fadeInUp delay-600ms text-2xl">{profile?.position}</h2>
              <p className="animated fadeInDown delay-1s text-gray-200">{profile?.about}</p>
              <div className="subtitle-rocket animated fadeInDownRotate delay-1s">
                <Image
                  className="rocket animated slower infinite floatingRocket"
                  src={rocketSVG}
                  alt="Rocket"
                  width={150}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <TopCloud />
      </div>
    </header>
  );
};

export default Hero;
