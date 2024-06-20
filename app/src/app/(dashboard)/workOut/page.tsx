import ShowWorkOut, { WorkOutInterface } from '@/actions/workOut/showWorkOut'
import { DeleteWorkOutComponente } from '@/components/workOut/delete'
import Image from 'next/image'
import Link from 'next/link'
import { CiCirclePlus } from 'react-icons/ci'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default async function WorkOut() {
  const dt = (await ShowWorkOut()) as WorkOutInterface[]

  return (
    <div className="p-4">
      <div className="inline-block">
        <Link
          href="/workOut/insert"
          className="flex items-center gap-1 hover:text-blue-500"
        >
          <CiCirclePlus className="w-5 h-5" />
          Adicionar itens
        </Link>
      </div>
      <h1 className="font-bold py-2 text-lg">Listas de Exercícios</h1>
      <div className="flex items-center flex-wrap gap-2">
        {dt.length > 0 &&
          dt &&
          dt.map((data) => (
            <div key={data.idWorkOut}>
              <div className="border border-zinc-500 rounded-sm max-md:w-80 w-96 transform duration-500 hover:scale-105 hover:bg-zinc-800 hover:text-white">
                <div className="relative flex items-center justify-between p-2 h-24">
                  <div className="w-[50%]">
                    {data.image && data.image.length > 10 ? (
                      <Image
                        src={`${data.image}`}
                        width={100}
                        height={100}
                        alt="Imagem"
                        className="max-w-28 max-h-20 min-h-10 object-contain mx-auto"
                      />
                    ) : (
                      <Image
                        src="/gym.jpg"
                        width={100}
                        height={100}
                        alt="Imagem"
                        className="max-w-28 max-h-20 min-h-10 object-contain mx-auto"
                      />
                    )}
                  </div>
                  <div className="w-[50%]">
                    <p className="font-medium">{data.name}</p>
                    <p className="font-light">{data.repetition}</p>
                  </div>
                  <Link href={`/workOut/${data.idWorkOut}`}>
                    <MdKeyboardArrowRight className="w-5 h-8" />
                  </Link>
                  <div className="hover:text-white">
                    <DeleteWorkOutComponente id={data.idWorkOut} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
